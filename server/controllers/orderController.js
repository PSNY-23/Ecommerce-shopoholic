import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

// Order placing: COD
const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      
    };
      const newOrder = new orderModel(orderData);
      await newOrder.save()
      await userModel.findByIdAndUpdate(userId, { cartData: {} })
      
      res.json({success: true, message: "Order Placed"})
  } catch (error) {
      console.log(error);
      res.json({success:false, message: error.message})
  }
};

// Order placing: Stripe
const placeOrderStripe = async (req, res) => {};

// Order placing: Razorpay
const placeOrderRazorpay = async (req, res) => {};

//All orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success: true, orders})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
};

//User order data for frontend
const userOrders = async (req, res) => {
  console.log('reached order controller routers')
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({success:true, orders})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
};

//update order status fron admin frontend
const updateStatus = async (req, res) => {
  console.log('upade staus handler is reached')
  try {
    const { userId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({success: true, message: "Status Updated"})

  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message})
  }
};

export { placeOrderCOD, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };
