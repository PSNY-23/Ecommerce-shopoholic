import { addToCart, updateCart, getCart } from "../controllers/cartController.js";
import { Router } from "express"
import authUser from "../middlewares/authUser.js"

const cartRouter = Router();

cartRouter.post("/add",authUser, addToCart);
cartRouter.post('/update',authUser, updateCart);
cartRouter.get("/",authUser, getCart);

export default cartRouter;