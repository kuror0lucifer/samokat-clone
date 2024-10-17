import CategoryModel from "../models/Categories.js";

export const categories = (req, res) => {
  CategoryModel.find()
    .sort({ index: -1 })
    .then((categories) => res.json(categories))
    .catch((err) => res.json(err));
};
