import { Router } from "express";
import {
  placeOrderCOD,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js"
import authUser  from "../middlewares/authUser.js"

const orderRouter = Router();

//Admin routes
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

//Payment features
orderRouter.post('/cod',authUser, placeOrderCOD);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

//User features
orderRouter.post('/user-orders',authUser,userOrders)



export default orderRouter;
