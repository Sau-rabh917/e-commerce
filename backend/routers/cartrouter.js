import express from "express";
import { addToCart, getCart, updateCart, removeFromCart } from "../controller/cartcontroller.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/:userId", getCart);
router.put("/update", updateCart);
router.delete("/remove", removeFromCart);

export default router; 