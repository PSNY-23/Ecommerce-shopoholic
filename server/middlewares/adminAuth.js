import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  console.log('reached admin auth')
    
    try {
      console.log(req.body);
      console.log(req.headers)
      const token = req.body.headers['Authorization'].split(" ")[1]
      // Get token from "Bearer <token>"
      
       
      
    
    if (!token) {
      return res.json({ success: false, message: "Not authorized login again!" });
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not authorized login again!" });
      }
      next();
      
  } catch (error) {
      console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
