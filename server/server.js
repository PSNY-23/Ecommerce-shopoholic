import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import router from "./routes/index.js";
import dotenv from "dotenv"


//App configuration
const app = express();
const PORT = process.env.PORT || 3000
dotenv.config()
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//Api endpoints
app.use("/api", router)
app.get("/", (req, res) => {
    res.send("API is working...")
})











app.listen(PORT, ()=> console.log(`Server is running on ${PORT}....`))