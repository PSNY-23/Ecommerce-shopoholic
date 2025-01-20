import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
  const secterKey = process.env.JWT_SECRET;
  return jwt.sign({ id }, secterKey);
};
// User register controller
const registerUser = async (req, res) => {
  try {
    //1. check if user already exists
    const { name, email, password } = req.body;
    const exists = await userModel.findOne({ email: email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    //2. validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }
    //3. hasing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    //4. Token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//User-login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //1. Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doen't exists Please sign up." });
    }
    //2.Check is the password is correct or not
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      console.log(token)
      res.json({
        success: true,
        token,
      });
    }
    else {
      res.json({success:false, message:"Invalid credentials"})
    }
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
};

//Admin-login controller
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SCERET)
      res.json({success: true, token})
    }
    else {
      res.json({success:false, message:"Invalid credentials"})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error})
  }
};

export { loginUser, registerUser, adminLogin };
