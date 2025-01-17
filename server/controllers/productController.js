import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//Add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller, date } = req.body;
       

        //1. Handling image, and uploading it to cloudinary
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {
                    resource_type:'image'
                })
                return result.secure_url
            })
        )
        //2. making new Product data
        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestSeller: bestSeller === "true" ? true : false,
            sizes: sizes,
            image: imagesUrl,
            date: Date.now(),  // If a date is provided, use it; otherwise, default will be used

        }
        const product = new productModel(productData)
        await product.save()
        res.json({success:true, message:"Product added successfully"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

// list products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

// Remove products
const removeProducts = async (req, res) => {
    try {
        const productId = req.body.id
        await productModel.findByIdAndDelete(productId)
        res.json({success:true, message:"Product removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

// Single  product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findOne({ _id: productId })
        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export {addProduct, listProducts, removeProducts, singleProduct}