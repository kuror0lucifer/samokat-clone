import express from "express";
import authValidation from "../validation/auth.js";
import { auth, verify } from "../controllers/UserController.js";

const userRoutes = express.Router();

userRoutes.post("/auth/authentication", authValidation, auth);
userRoutes.post("/auth/verify", verify);

export default userRoutes;
