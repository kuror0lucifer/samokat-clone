import User from "../models/User.js";

export const nameChange = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      user.name = name;
      await user.save();
    }

    return;
  } catch (err) {
    res.status(500).json({ message: "Ошибка при сохранении имени" });
  }
};

export const getName = (req, res) => {
  const email = req.query.email;

  User.findOne({ email })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
