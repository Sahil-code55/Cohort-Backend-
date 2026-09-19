import mongoose from "mongoose"

const ConnectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB is Connected Successfully");
    
}

export default ConnectDB