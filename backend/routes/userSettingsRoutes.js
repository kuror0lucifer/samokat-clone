import express from "express";
import { getName, nameChange } from "../controllers/UserSettingsController.js";

const userSettingsRoutes = express.Router();

userSettingsRoutes.post("/nameChange", nameChange);
userSettingsRoutes.get("/name", getName);

export default userSettingsRoutes;
