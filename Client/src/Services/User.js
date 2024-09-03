import axiosInstance from "../utils/Instance";

// To create an account
export const Register = async (newUser) => {
  try {
    console.log(newUser); // Debugging purpose
    const response = await axiosInstance.post("/auth/signup", newUser);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// To log into an account
export const signin = async (User) => {
  try {
    console.log(User); // Debugging purpose
    const response = await axiosInstance.post("/auth/signin", User);
    return response.data;
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw error;
  }
};

// Forget Password
export const ForgetPassword = async (existingEmail) => {
  try {
    const response = await axiosInstance.post(
      "/auth/forgetpassword",
      existingEmail
    );
    return response.data;
  } catch (error) {
    console.error("Forget Password request failed:", error);
    throw error;
  }
};

// Reset Password
export const ResetPassword = async (newPassword, token) => {
  try {
    const response = await axiosInstance.post(
      `/auth/resetpassword/${token}`,
      newPassword
    );
    return response.data;
  } catch (error) {
    console.error("Reset Password request failed:", error);
    throw error;
  }
};

// Upload Profile Photo
export const UpdateProfilePhoto = async (newPhoto) => {
  try {
    const response = await axiosInstance.post("/auth/profile/upload", newPhoto);
    return response.data;
  } catch (error) {
    console.error("Profile photo upload failed:", error);
    throw error;
  }
};

// Remove Profile Photo
export const RemoveProfilePhoto = async () => {
  try {
    const response = await axiosInstance.delete("/auth/profile/remove");
    return response.data;
  } catch (error) {
    console.error("Profile photo removal failed:", error);
    throw error;
  }
};
