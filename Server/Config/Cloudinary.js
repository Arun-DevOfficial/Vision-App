// Require the cloudinary library
// const cloudinary = require("cloudinary").v2;
import { v2 as cloudinaryV2 } from "cloudinary";
// Return "https" URLs by setting secure: true
cloudinaryV2.config({
  secure: false,
});

//export cloudinary
export { cloudinaryV2 };
