import express  from "express"
import upload from "../Config/multer.config.js";
import { createPost, getAllPost } from "../Controllers/post.controller.js";

const router = express.Router()

router.post("/create",upload.single("image"),createPost)
router.get("/allPosts",getAllPost)

export default router
