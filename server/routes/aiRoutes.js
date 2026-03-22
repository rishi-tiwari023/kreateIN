import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject } from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

export const aiRouter = express.Router();

aiRouter.post("/generate-article", auth, generateArticle);
aiRouter.post("/generate-blog-title", auth, generateBlogTitle);
aiRouter.post("/generate-image", auth, generateImage);
aiRouter.post("/remove-image-background", auth, upload.single('image'), removeImageBackground);
aiRouter.post("/remove-object", auth, upload.single('image'), removeImageObject);
