import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../models/user.model.js";
import { authenticate } from "../middleware/auth.middleware.js";
import  bcrypt from "bcryptjs";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/auth/register", async (req, res) => {

    const { password, email, name } = req.body;
    // save in db
    const user = await userModel.create({
        email ,name , password :await bcrypt.hash(password,10)
    });

    //jwt.sign create token in {} all the data of use that we want to keep in token
    const token = jwt.sign({
      id : user._id
    },
    // jwt secret 
    process.env.JWT_SECRET
);

res.status(201).json({
    message: "User Created Successfully",
    data:{
     user :{
        email,name, id : user._id
     },
     token
    }
})
});

app.get("/api/auth/me",authenticate, async (req, res)=>{
// so, wherever there is a request to this route /api/auth/me 
//  then firstly it go to  authenticate function then 
// it come the this api controller

console.log(res.user);

res.status(200).json({
    data:{
        user:req.user
    }
})

} )

app.post("/api/auth/login", async(req,res) =>{

    const { email , password} = req.body;

    const user = await userModel.findOne({email})

    const isValidPassword = bcrypt.compare(password ,user.password)

    if(!isValidPassword){
        return res.status(400).json({
            message:"Invalid user and password"
        })
    };

 const token = jwt.sign({
    id: user._id
 },process.env.JWT_SECRET)

 res.status(200).json({
    message: "user login Successfully",
    data:{
        user:{
            email:user.email,
            name:user.name
        }
    }
 },token)


});



export default app;