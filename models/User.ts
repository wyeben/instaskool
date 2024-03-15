import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
        },
    phone_number: {
      type: String,
      required: true,
        },
    avatar: {
      type: String,
    },
    onboarded: {
    type: Boolean,
    default: false,
  },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User
