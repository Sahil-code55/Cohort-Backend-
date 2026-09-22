import mongoose from "mongoose"
import config from "./config.js"

export  const connectDB = async(req,res)=>{

    await mongoose.connect(config.MONGO_URI);
    console.log("DB is Connected Successfully");
    
}
