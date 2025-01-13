import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//Add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, categroey, subCategory, sizes, bestSeller } = req.body;
        console.log(sizes)

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
            categroey,
            subCategory,
            price: Number(price),
            bestSeller: bestSeller === "true" ? true : false,
            sizes: sizes,
            image: imagesUrl,
            data: Date.now()

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
    
}

// Remove products
const removeProducts = async (req, res) => {
    
}

// Single product
const singleProduct = async (req, res) => {
    
}

export {addProduct, listProducts, removeProducts, singleProduct}