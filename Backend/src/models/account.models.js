import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["bank", "wallet", "credit card", "cash", "investment"],
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: "INR",
    }
}, {timestamps: true})

export const Account = mongoose.Model("Account", accountSchema)