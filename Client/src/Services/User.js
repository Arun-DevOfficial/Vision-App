import axiosInstance from "../utils/Instance";

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
    console.log("Uploading new profile photo:", newPhoto); // Debugging purpose
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
    console.log("Removing profile photo"); // Debugging purpose
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
