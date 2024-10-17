import ProductsModel from "../models/Products.js";

export const product = (req, res) => {
  const subcategoryId = req.params.subcategoryId;

  ProductsModel.aggregate([
    {
      $match: {
        subcategoryId: subcategoryId,
      },
    },
    {
      $unwind: "$products",
    },
    {
      $project: {
        _id: 0,
        title: 1,
        category: "$products.category",
        items: "$products.items",
      },
    },
  ])
    .then((products) => res.json(products))
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Ошибка при получении продуктов", error: err })
    );
};
