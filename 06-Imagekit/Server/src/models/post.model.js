import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  caption:{
    type:String,
    require: true,
  },  
  image:{
    type:String,
    require: true,
  }  
},{timestamps:true} )
// timestamp udate date and time automatically in db


const postModel = mongoose.model("posts",postSchema);

export default postModel