import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    const secterKey = process.env.JWT_SCERET;
  return jwt.sign({ id }, process.env.JWT_SCERET);
};
// User register controller
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //1. check if user already exists
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
    console.log("generating token");
    const token = createToken(user._id);
    console.log("toekn generated");
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//User-login controller
const loginUser = async (req, res) => {
  res.json({ message: "login route working" });
};

//Admin-login controller
const adminLogin = async (req, res) => {
  res.json({ message: "admin login route working" });
};

export { loginUser, registerUser, adminLogin };
