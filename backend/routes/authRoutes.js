import express from "express";
import adminlogin from "../controllers/authController.js";


const authRouter = express.Router();

authRouter.post("/adminlogin" , adminlogin);

export default authRouter;