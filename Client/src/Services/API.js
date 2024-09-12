import axios from "axios";
import axiosInstance from "../utils/Instance";

// USER API CALLS

// To create an account
export const Register = async (newUser) => {
  const response = await axiosInstance.post("/auth/signup", newUser);
  return response;
};

// To log into an account
export const signin = async (User) => {
  const response = await axiosInstance.post("/auth/signin", User);
  return response;
};

// Forget Password
export const ForgetPassword = async (existingEmail) => {
  const response = await axiosInstance.post(
    "/auth/forgetpassword",
    existingEmail
  );
  return response.data;
};

// Reset Password
export const ResetPassword = async (newPassword, token) => {
  const response = await axiosInstance.post(
    `/auth/resetpassword/${token}`,
    newPassword
  );
  return response.data;
};

// Upload Profile Photo
export const UpdateProfilePhoto = async (newPhoto) => {
  try {
    const response = await axiosInstance.post("/auth/profile/upload", newPhoto);
    return response.data;
  } catch (error) {
    console.error(
      "Profile photo upload failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Remove Profile Photo
export const RemoveProfilePhoto = async () => {
  try {
    const response = await axiosInstance.delete("/auth/profile/remove");
    return response.data;
  } catch (error) {
    console.error(
      "Profile photo removal failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

//BLOG API CALLS

// Upload Blog Banner
export const handleBlogBannerUpload = async (newFormData) => {
  console.log(newFormData);
  const response = await axios.post(
    import.meta.env.VITE_CLOUDINARY_BASE_URL, // Cloudinary upload URL from env
    newFormData
  );
  console.log(response.data);
  return response.data;
};
