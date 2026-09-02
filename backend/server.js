import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import blogRouter from "./routes/blogRoutes.js";
import authRouter from "./routes/authRoutes.js";



const app = express();
app.use(express.json());

app.use(cors());
app.use('/uploads', express.static('uploads'));


const PORT = 4000 || process.env.PORT;

app.use("/api/blog",blogRouter);
app.use("/api/auth",authRouter);

connectDb();

app.get("/" , (req,res)=>{
    res.send("Server  is running");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});