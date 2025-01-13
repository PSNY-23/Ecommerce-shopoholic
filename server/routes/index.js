import { Router } from "express";
import userRouter from "./userRoutes.js";

const router = Router();

router.use("/user", userRouter)


export default router;