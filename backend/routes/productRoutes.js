import express from "express";
import { product } from "../controllers/ProductController.js";

const productRoutes = express.Router();

productRoutes.get("/getProducts/:subcategoryId", product);

export default productRoutes;
