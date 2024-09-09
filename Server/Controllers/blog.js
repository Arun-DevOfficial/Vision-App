import { fileURLToPath } from "url";
import path from "path";
import { cloudinaryV2 } from "../Config/Cloudinary.js";

//setup blog banner upload
export const handleBannerUpload = async (req, res) => {
  // Get the current file and directory name
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filepath = path.join(
    __dirname,
    "..",
    "uploads",
    `${req.file.filename}`
  );
  // Cloudinary Image Upload
  await cloudinaryV2.uploader
    .upload(filepath)
    .then((result) => {
      return res.json(result.secure_url);
    })
    .catch((err) => {
      console.error(err);
    });
};
