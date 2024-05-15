import mongoose from 'mongoose';

const SubcategorySchema = new mongoose.Schema({
  subcategoryImg: String,
  title: String,
});

const CategoriesSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  subcategories: [SubcategorySchema],
});

const CategoryModel = mongoose.model('categories', CategoriesSchema);
export default CategoryModel;
