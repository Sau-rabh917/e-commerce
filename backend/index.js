import express from "express";
import db from "./configure/db.js";
import userRouter from "./routers/userrouter.js";
import testRouter from "./routers/testrouter.js";
import cartRouter from "./routers/cartrouter.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
db(); // connect to database



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //middlewares

// middleware 
app.use("/api/test", testRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 