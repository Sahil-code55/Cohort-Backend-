//  we are using this because  if we need know the user how are performing operation  example- like , comment, save,follow then we need know the identity of the so, in each operation 
// 1st we have to find the user the performing operation so, to stop repeating code we make a middle of that 

import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import dotenv from "dotenv";

export const authenticate = async(req,res,next)=>{

// if data transfer is related to AUTHENTIFICATION then web use 
// req.headers instead of req.body 
// here we transfer token with api request to server 
// .authorization is a method in which we give token value 
    const token = req.headers.authorization;
    
   if(!token) {
    return res.status(401).json({
        message:"Token not found"
    })
   }
    const data = jwt.verify(token,process.env.JWT_SECRET)
    // we use verify method instead of decode bcz anyone can me token but if we use verify then it will check the token is create by own server or not

    const user = await userModel.findById(data.id);

// here we are creating user property in req and  in the value we are saving the value of user in 17 no. line
// jis bhi user ne request ki hogi uska data  req.user me save kr dega
    req.user = user

    next()
 // this help us to transfer this data to api in app.js  by writing authenticate in the api route
}