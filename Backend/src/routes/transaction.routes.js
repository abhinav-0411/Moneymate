import express from "express";
import { addTransaction, getTransactions } from "../controllers/transaction.controllers.js";
import authMiddleware from "../middleware/auth.middlewares.js";

const router = express.Router();

router.post("/", authMiddleware, addTransaction);
router.get("/", authMiddleware, getTransactions);

export default router;
