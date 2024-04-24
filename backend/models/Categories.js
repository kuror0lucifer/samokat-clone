import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
});

const CategoryModel = mongoose.model('categories', CategoriesSchema);
export default CategoryModel;
