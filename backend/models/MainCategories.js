import mongoose from 'mongoose';

const MainCategoriesSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
});

const MainCategoryModel = mongoose.model(
  'mainCategories',
  MainCategoriesSchema,
  'mainCategories'
);
export default MainCategoryModel;
