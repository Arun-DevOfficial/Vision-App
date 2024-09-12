import express from "express";
import { upload } from "../Middleware/Multer.js";
import { handleBannerUpload } from "../Controllers/blog.js";

//Router Config
const router = express.Router();

//Blog Routes
router.post("/get-upload-url", upload.single("image"), handleBannerUpload);

export default router;