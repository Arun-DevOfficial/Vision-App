import { useContext, useState } from "react";
import { Button } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { ContextMenu } from "../Context/Provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin } from "../Services/API";
import toast, { Toaster } from "react-hot-toast";
import { handleGoogleSignIn } from "./auth/Oauth";

export default function Login() {
  const { model, setModel } = useContext(ContextMenu); //Context Data
  const queryClient = useQueryClient(); //QueryClient
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Dynamically update field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //To login into account
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (formData) => signin(formData),
    onSuccess: (response) => {
      toast.success(response.data.SuccessMessage);
      queryClient.invalidateQueries(["login"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErroMmessage);
    },
    retry: false,
  });
  //Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };
  return (
    <>
      <div className="flex-shrink-0 w-full max-w-xs">
        <h2 className="text-3xl font-semibold text-center mb-2 font-title">
          Welcome back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter your details to sign in.
        </p>
        <div className="flex justify-center w-full gap-2 mb-6">
          <Button
            variant="solid"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 w-full py-2 border rounded-full bg-white text-gray-700 shadow hover:bg-gray-100 transition-all duration-200"
          >
            <FcGoogle size={20} />
            <span className="font-medium font-poppins">
              Sign In with Google
            </span>
          </Button>
        </div>
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500 capitalize">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 transition-all duration-200"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="false"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-500 transition-all duration-200"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="Check" id="Check" />
              <label
                className="text-sm font-medium text-gray-600"
                htmlFor="Check"
              >
                Remember Me
              </label>
            </div>
            <p className="text-slate-800 font-medium cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button
              disabled={mutation.isPending}
              className="w-full text-white bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 cursor-pointer py-3 rounded-full transition-all duration-200"
            >
              Sign In
            </Button>
          </div>
          <p className="text-center mt-4">
            Dont have an account?{" "}
            <span
              onClick={() => setModel(!model)}
              className="text-slate-800 cursor-pointer hover:underline font-bold"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
      <Toaster />
    </>
  );
}
