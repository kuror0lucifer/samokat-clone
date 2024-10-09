import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import crypto from "crypto";

import CategoryModel from "./models/Categories.js";
import ProductsModel from "./models/Products.js";

import User from "./models/User.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.rambler.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.DB_CONN)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.get("/getCategories", (req, res) => {
  CategoryModel.find()
    .sort({ index: -1 })
    .then((categories) => res.json(categories))
    .catch((err) => res.json(err));
});

app.get(`/getProducts/:subcategoryId`, (req, res) => {
  const subcategoryId = req.params.subcategoryId;

  ProductsModel.aggregate([
    {
      $match: {
        subcategoryId: subcategoryId,
      },
    },
    {
      $unwind: "$products",
    },
    {
      $project: {
        _id: 0,
        title: 1,
        category: "$products.category",
        items: "$products.items",
      },
    },
  ])
    .then((products) => res.json(products))
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Ошибка при получении продуктов", error: err })
    );
});

app.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Пользователь с такой почтой уже существует" });
    }

    const verificationCode = crypto.randomBytes(2).toString("hex");
    const codeExpires = Date.now() + 3600000;

    user = new User({
      email,
      verificationCode,
      codeExpires,
    });
    await user.save();

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Подтверджение регистрации",
      text: `Ваш код для подтверждения: ${verificationCode}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error while sending email:", error);
        return res.status(500).json({ message: "Ошибка при отправке почты." });
      }
      res.status(200).json({
        message: "Регистрация успешна. Проверьте почту для подтверждения.",
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
});

app.post("/verify", async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }

    if (user.codeExpires < Date.now()) {
      return res.status(400).json({ message: "Код истек" });
    }

    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({ message: "Неправильный код" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.codeExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Email успешно подтвержден" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
