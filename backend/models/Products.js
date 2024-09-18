import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productWeight: String,
  productImg: String,
  productId: String,
});

const ProductsAboveSchema = new mongoose.Schema({
  category: String,
  items: [ItemsSchema],
});

const ProductsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  subcategoryId: String,
  products: [ProductsAboveSchema],
});

const ProductsModel = new mongoose.model("products", ProductsSchema);
export default ProductsModel;
