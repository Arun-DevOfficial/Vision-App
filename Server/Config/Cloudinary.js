import { v2 as cloudinaryV2 } from "cloudinary";
import { config as configDotenv } from "dotenv";

// Load environment variables
configDotenv();

// Connect to Cloudinary
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // Corrected capitalization
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Secure should generally be set to true
});

// Export Cloudinary configuration
export { cloudinaryV2 };
