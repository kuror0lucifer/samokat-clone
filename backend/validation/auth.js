import { body } from "express-validator";

const authValidation = [body("email", "Неверный формат почты").isEmail()];

export default authValidation;
