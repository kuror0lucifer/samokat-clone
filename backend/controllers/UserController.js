import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import { validationResult } from "express-validator";

import User from "../models/User.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.rambler.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

export const register = async (req, res) => {
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

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Подтверждение регистрации",
      text: `Ваш код для подтверждения: ${code}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error while sending email:", error);
        return res.status(500).json({ message: "Ошибка при отправке почты." });
      }
      res.status(200).json({
        message: "Регистрация успешна. Проверьте почту для подтверждения.",
        user: userData,
      });
    });

    const { verificationCode, codeExpires, ...userData } = profile._doc;

    res.json({
      ...userData,
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
};

export const verify = async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
    }

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
    const profile = await user.save();

    const token = jwt.sign(
      {
        _id: profile._id,
        email: profile.email,
      },
      process.env.TOKEN,
      {
        expiresIn: "30d",
      }
    );

    res.status(200).json({ message: "Email успешно подтвержден", token });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
};
