import { Router} from "express"
import userModel from "../models/user.models.js";
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";
import cookieParser from "cookie-parser"

const router = Router();

router.post("/register",async(req,res)=>{

const {name ,email,password} = req.body;
const isUserExist = await userModel.findOne({email});

    if(isUserExist){
       return res.status(400).json({
        message:"User already exist",
        error :[
            {
                field: "email",
                message:"User already exist"
            }
        ]
       })
    }

    const user = await userModel.create({
    name,email,passwordHash: await bcrypt.hash(password,12) });

    const {accessToken,refreshToken} =generateTokens({userId:user._id})

    // saving to database
    user.refreshToken = refreshToken
    await user.save();

//  mean only server can access this
    res.cookie("refreshToken",refreshToken,{
        httpOnly:true
    })
    res.status(201).json({
        message:"User register Successfully",
        data:{
            user:{
                name :user.name,
                email :user.email
            }
        }
    })
});

router.get("/me",async(req,res)=>{
const accessToken = req.headers.authorization?.split(" ")[1];
try {
     
    const decoded = verifyAccessToken(accessToken);
    const user =await userModel.findById(decoded.id);
  return res.status(200).json({
        message: "user fetch successfully",
        data:{
            user:{
                name:user.name,
                email:user.email
            }
        }
    })


} catch (error) {
    return res.status(401).json({
        message: "Unauthorized, Invalid or expired Access Token"
    })
}



})

router.post("/refresh",async(req,res)=>{
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken){
        return res.status(401).json({
         message:"Unauthorized ,invalid refresh Token"
        })
    }

    try {
        const decoded = verifyRefreshToken(refreshToken);
        const user =await userModel.findById(decoded.id);
    if(refreshToken !== user.refreshToken){

        // block the refresh token
        user.refreshToken = null
        await user.save()
          return res.status(401).json({
        message: "Unauthorized, Refresh Token mismatched"
        })

    }

   const {accessToken ,refreshToken: newRefreshToken} = generateTokens({userId:user._id});

   res.cookie("refreshToken",newRefreshToken,{httpOnly:true})

 user.refreshToken = newRefreshToken
 await user.save()
 res.status(200).json({
    message:"Token refreshed Successfully",
    accessToken
 })


    }
     catch (error) {
          return res.status(401).json({
        message: "Unauthorized, Invalid or expired Refresh Token"
        })
}

});

export default router;