import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { validationResult } from "express-validator";

import CategoryModel from "./models/Categories.js";
import ProductsModel from "./models/Products.js";
import User from "./models/User.js";

import registerValidation from "./validation/auth.js";

dotenv.config();
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.rambler.ru",
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.MAIL}`,
    pass: `${process.env.PASS}`,
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const DBConnection = process.env.DB_CONN;

mongoose
  .connect(`${DBConnection}`)
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

app.post("/register", registerValidation, async (req, res) => {
  try {
    const { email } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Пользователь с такой почтой уже существует" });
    }

    const code = crypto.randomBytes(2).toString("hex");
    const codeLifeTime = Date.now() + 3600000;

    user = new User({
      email,
      verificationCode: code,
      codeExpires: codeLifeTime,
    });
    const profile = await user.save();

    const token = jwt.sign(
      {
        _id: profile._id,
      },
      "token",
      {
        expiresIn: "30d",
      }
    );

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Подтверджение регистрации",
      text: `Ваш код для подтверждения: ${code}`,
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

    const { verificationCode, codeExpires, ...userData } = profile._doc;

    res.json({
      ...userData,
      token,
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
