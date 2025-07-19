import express from "express";
import { testsController } from "../controller/testcontroller.js";

const router = express.Router();

router.get("/", testsController);

export default router;

