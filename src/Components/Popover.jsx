import { Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import { useRef } from "react";

export default function Popover({ onClose }) {
  const modelRef = useRef();

  //reference close model
  const closeModel = (e) => {
    if (modelRef.current === e.target) return onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-[#999999]/50 flex justify-center items-center z-20"
      ref={modelRef}
      onClick={closeModel}
    >
      <div className="relative bg-[#ffffff] p-8 rounded-lg shadow-lg w-full max-w-md">
        <X
          className="absolute top-4 right-4 text-gray-700 cursor-pointer hover:text-gray-900"
          onClick={onClose}
        />
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <div className="my-6 flex gap-2">
              <input type="checkbox" name="Check" id="Check" />
              <label className="text-sm font-medium">
                Terms and Conditions
              </label>
            </div>
            <p className="text-slate-800 font-medium cursor-pointer hover:underline">
              Forget Password?
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button
              variant="solid"
              className="w-full text-white bg-slate-900 hover:bg-slate-800 cursor-pointer py-3 rounded-full"
            >
              Sign Up
            </Button>
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <span className="text-slate-800 cursor-pointer hover:underline font-bold">
              Login.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
