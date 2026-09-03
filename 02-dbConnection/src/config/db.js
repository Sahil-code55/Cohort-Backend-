const { default: mongoose } = require("mongoose");

const connectDB = async()=>{
   try{ 
    await mongoose.connect("mongodb+srv://sahusahil553_db_user:wsoA5JK6aUaOPZSR@cluster0.l9eh3xh.mongodb.net/")
    console.log(" MongoDB connected Successfully");  
    }
    catch(error){
    console.log("Error while connecting MongoDB",error);
    }
}


module.exports = connectDB