// import express from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import mongoose from 'mongoose';
// import { validationResult } from 'express-validator';
// import cors from 'cors';

// import categoriesSchema from './models/Categories.js';

// import { registerValidation } from './validation/auth.js';

// import UserModel from './models/User.js';

// const app = express();

// mongoose
//   .connect(
//     'mongodb+srv://admin:Fedffedf27@cluster0.nl0usoo.mongodb.net/samokat?retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Определение схемы для категорий
// const Category = mongoose.model('Category', categoriesSchema);

// app.use(express.json());
// app.use(cors());

// // Маршрут для получения категорий
// app.get('/api/categories', async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/auth/login', async (req, res) => {
//   try {
//     const user = await UserModel.findOne({ email: req.body.email });

//     if (!user) {
//       return res.status(404).json({
//         message: 'Пользователь не найден',
//       });
//     }

//     const isValidPass = await bcrypt.compare(
//       req.body.password,
//       user._doc.passwordHash
//     );

//     if (!isValidPass) {
//       return res.status(400).json({
//         message: 'Неверный логин или пароль',
//       });
//     }

//     const token = jwt.sign(
//       {
//         _id: user._id,
//       },
//       'secret123',
//       {
//         expiresIn: '30d',
//       }
//     );

//     const { passwordHash, ...userData } = user._doc;

//     res.json({
//       ...userData,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: 'Не удалось авторизоваться',
//     });
//   }
// });

// app.post('/auth/register', registerValidation, async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json(errors.array());
//     }

//     const password = req.body.password;
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     const doc = new UserModel({
//       email: req.body.email,
//       fullName: req.body.fullName,
//       passwordHash: hash,
//     });

//     const user = await doc.save();

//     const token = jwt.sign(
//       {
//         _id: user._id,
//       },
//       'secret123',
//       {
//         expiresIn: '30d',
//       }
//     );

//     const { passwordHash, ...userData } = user._doc;

//     res.json({
//       ...userData,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: 'Не удалось зарегистрироваться',
//     });
//   }
// });

// app.listen(3001, err => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Server OK');
// });
