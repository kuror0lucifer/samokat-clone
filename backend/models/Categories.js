import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productWeight: String,
  productImg: String,
});

const ProductsSchema = new mongoose.Schema({
  category: String,
  categoryId: String,
  items: [ItemsSchema],
});

const SubcategorySchema = new mongoose.Schema({
  subcategoryImg: String,
  title: String,
  _id: String,
  products: [ProductsSchema],
});

const CategoriesSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  subcategories: [SubcategorySchema],
});

const CategoryModel = mongoose.model("categories", CategoriesSchema);
export default CategoryModel;
