const { default: mongoose } = require("mongoose");

const connectDB = async()=>{
   try{ 
    await mongoose.connect(process.env.mongodb_uri);
    console.log(" MongoDB connected Successfully");  
    }
    catch(error){
    console.log("Error while connecting MongoDB",error);
    }
}


module.exports = connectDB