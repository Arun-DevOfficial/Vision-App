import { useContext, useState } from "react";
import { Button } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { ContextMenu } from "../Context/Provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Register } from "../Services/User";
import toast, { Toaster } from "react-hot-toast";
import { handleGoogleSignIn } from "./auth/Oauth";

export default function SignUp() {
  const { model, setModel } = useContext(ContextMenu);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const queryClient = useQueryClient();

  //To Create a an account
  const mutation = useMutation({
    mutationKey: "register",
    mutationFn: (newFormData) => Register(newFormData), // This will receive the data when you call mutate
    onSuccess: (response) => {
      queryClient.invalidateQueries("register");
      toast.success(response?.data?.SuccessMessage);
      setModel(!model);
    },
    onError: (error) => {
      toast.error(`${error.response?.data?.ErrorMessage}`);
    },
    retry: false,
  });

  //Dynamically update fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  //Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <>
      <div className="flex-shrink-0 w-full max-w-xs">
        <h2 className="text-3xl font-semibold text-center mb-2 font-title">
          Create your account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter your details to sign up.
        </p>
        <div className="flex justify-center w-full gap-2 mb-6">
          <Button
            variant="solid"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 w-full py-2 border rounded-full bg-white text-gray-700 shadow hover:bg-gray-100 transition-all duration-200"
          >
            <FcGoogle size={20} />
            <span className="font-medium font-poppins">Signup with Google</span>
          </Button>
        </div>
        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500 capitalize">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
            />
          </div>
          {/* Sign-Up Button */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="solid"
              disabled={mutation.isPending}
              className="w-full text-white bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 cursor-pointer py-3 rounded-full transition-all duration-200"
            >
              Sign Up
            </Button>
          </div>
        </form>
        {/* Redirect to Sign In */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => setModel(!model)}
            className="text-slate-800 cursor-pointer hover:underline font-bold"
          >
            Sign In
          </span>
        </p>
      </div>
      <Toaster />
    </>
  );
}
