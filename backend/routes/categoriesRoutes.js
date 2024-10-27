import express from "express";
import { categories } from "../controllers/CategoriesController.js";

const categoriesRoutes = express.Router();

categoriesRoutes.get("/getCategories", categories);

export default categoriesRoutes;
