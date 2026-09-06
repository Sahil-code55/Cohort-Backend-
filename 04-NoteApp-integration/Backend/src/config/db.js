const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
   
        await mongoose.connect(process.env.mongodb_uri);
        console.log("DB connected successfully");


    }catch(error){
   console.log("Error in DB connection ",error);

    }
}

module.exports = connectDB;