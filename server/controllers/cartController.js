import userModel from "../models/userModel.js";

//1.Add to cart
const addToCart = async (req, res) => { 
    const { userId } = req.body;
    const { itemId, size } = req.body;
    try {
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({success:true, message: "Added to cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
    
};

//2. Update cart
const updateCart = async (req, res) => { 
    const { userId, itemId, size, quantity } = req.body;
    try {
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({success: true, message: "Cart Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
    
    
};

//3. get cart
const getCart = async (req, res) => {
    const {userId} = req.body
    try {
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        res.json({success:true, cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})

    }
 };

export {addToCart, updateCart, getCart}
