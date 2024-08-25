import { useContext } from "react";
import { Button } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter } from "react-icons/fa";
import { ContextMenu } from "../Context/Provider";

export default function Login() {
  const { model, setModel } = useContext(ContextMenu);
  console.log(model);

  return (
    <div className="flex-shrink-0 w-full max-w-xs">
      <h2 className="text-3xl font-semibold text-center mb-2 font-title">
        Welcome back
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please enter your details to sign in.
      </p>
      <div className="flex justify-between gap-2 mb-6">
        <Button
          variant="solid"
          className="flex items-center justify-center gap-2 w-1/3 py-2 border rounded-md bg-white text-gray-700 shadow hover:bg-gray-100 transition-all duration-200"
        >
          <FcGoogle size={20} />
        </Button>
        <Button
          variant="solid"
          className="flex bg-white text-gray-700 hover:bg-gray-100 items-center justify-center gap-2 w-1/3 py-2 border rounded-md shadow transition-all duration-200"
        >
          <FaApple size={20} />
        </Button>
        <Button
          variant="solid"
          className="flex items-center justify-center gap-2 w-1/3 py-2 border bg-white hover:bg-gray-100 rounded-md shadow text-[#1991DA] transition-all duration-200"
        >
          <FaTwitter size={20} />
        </Button>
      </div>
      <div className="flex items-center mb-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-500 capitalize">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <form>
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
            variant="solid"
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
  );
}
