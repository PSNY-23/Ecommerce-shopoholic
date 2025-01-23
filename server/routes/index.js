import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";
import cartRouter from "./cartRoutes.js";
import orderRouter from "./orderRoutes.js";

const router = Router();

router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/cart", cartRouter)
router.use("/order",orderRouter)


export default router;