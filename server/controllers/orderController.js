import orderModel from "../models/orderModel.js";

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
      data: Date.now(),
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
const allOrders = async (req, res) => {};

//User order data for frontend
const userOrders = async (req, res) => {};

//update order status fron admin frontend
const updateStatus = async (req, res) => {};

export { placeOrderCOD, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };
