import { Transaction } from "../models/transaction.models.js";

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, description, date } = req.body;

    const transaction = new Transaction({
      user: req.user.id,
      type,
      amount,
      category,
      description,
      date,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};