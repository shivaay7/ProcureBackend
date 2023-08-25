import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      trim: true,
    },
    email: {
      type: "String",
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
      trim: true,
    },
    phone: {
      type: "String",
      required: true,
      trim: true,
    },
    address: {
      type: "String",
      required: true,
      trim: true,
    },
    role: {
      type: "number",
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
