import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  verificationCode: String,
  codeExpires: Date,
});

const User = mongoose.model("users", userSchema);
export default User;
