import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../models/user.model.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/register", async (req, res) => {
    
    const { password, email, name } = req.body;
    // save in db
    const user = await userModel.create({
        email ,name , password
    }) 

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

export default app;