import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import CategoryModel from "./models/Categories.js";
import ProductsModel from "./models/Products.js";

import { validationResult } from "express-validator";
import { registerValidation } from "./validation/auth.js";

import UserModel from "./models/User.js";

import dotenv from "dotenv";
import ProductModel from "./models/Product.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_CONN)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.get("/getCategories", (req, res) => {
  CategoryModel.find()
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

app.post("/auth/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Неверный логин или пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
});

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
