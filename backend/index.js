import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { auth, verify } from "./controllers/UserController.js";
import { product } from "./controllers/ProductController.js";
import { categories } from "./controllers/CategoriesController.js";
import authValidation from "./validation/auth.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const DBConnection = process.env.DB_CONN;

mongoose
  .connect(DBConnection)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.get("/getCategories", categories);
app.get("/getProducts/:subcategoryId", product);
app.post("/auth/authentication", authValidation, auth);
app.post("/auth/verify", verify);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
