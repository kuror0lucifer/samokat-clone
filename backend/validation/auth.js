import { body } from "express-validator";

const registerValidation = [body("email", "Неверный формат почты").isEmail()];

export default registerValidation;
