// import { useContext, useState } from "react";
// import { Button } from "@radix-ui/themes";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple, FaTwitter } from "react-icons/fa";
// import { ContextMenu } from "../Context/Provider";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Register } from "../Services/User";
// import toast, { Toaster } from "react-hot-toast";

// export default function SignUp() {
//   const { model, setModel } = useContext(ContextMenu);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const queryClient = useQueryClient();

//   //To Create a an account
//   const { isPending, isError } = useMutation({
//     mutationKey: ["register", formData],
//     mutationFn: () => Register(formData),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["register"]);
//     },
//   });

//   //Error & Loading State
//   if (isError) return toast.error("There was an error..");
//   if (isPending) return toast.loading("Loading...");

//   //Dynamically update fields
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData);
//   };
//   return (
//     <>
//       <div className="flex-shrink-0 w-full max-w-xs">
//         <h2 className="text-3xl font-semibold text-center mb-2 font-title">
//           Create your account
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Please enter your details to sign up.
//         </p>
//         <div className="flex justify-between gap-2">
//           <Button
//             variant="solid"
//             className="flex items-center justify-center gap-2 w-1/3 py-2 border rounded-md bg-white text-gray-700 shadow hover:bg-gray-100 transition-all duration-200"
//           >
//             <FcGoogle size={20} />
//           </Button>
//           <Button
//             variant="solid"
//             className="flex bg-white text-gray-700 hover:bg-gray-100 items-center justify-center gap-2 w-1/3 py-2 border rounded-md shadow transition-all duration-200"
//           >
//             <FaApple size={20} />
//           </Button>
//           <Button
//             variant="solid"
//             className="flex items-center justify-center gap-2 w-1/3 py-2 border bg-white hover:bg-gray-100 rounded-md shadow text-[#1991DA] transition-all duration-200"
//           >
//             <FaTwitter size={20} />
//           </Button>
//         </div>
//         {/* Divider */}
//         <div className="flex items-center my-3">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="px-3 text-sm text-gray-500 capitalize">or</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>
//         <form>
//           {/* Name Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               onChange={(e) => handleChange(e)}
//               placeholder="Your Email"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
//             />
//           </div>
//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               onChange={(e) => handleChange(e)}
//               type="password"
//               name="password"
//               placeholder="Your Password"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-800 transition-all duration-200"
//             />
//           </div>
//           {/* Sign-Up Button */}
//           <div className="flex items-center justify-between mb-6">
//             <Button
//               variant="solid"
//               disabled={isPending}
//               className="w-full text-white bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 cursor-pointer py-3 rounded-full transition-all duration-200"
//             >
//               Sign Up
//             </Button>
//           </div>
//         </form>
//         {/* Redirect to Sign In */}
//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <span
//             onClick={() => setModel(!model)}
//             className="text-slate-800 cursor-pointer hover:underline font-bold"
//           >
//             Sign In
//           </span>
//         </p>
//       </div>
//       <Toaster />
//     </>
//   );
// }

import { useContext, useState } from "react";
import { Button } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter } from "react-icons/fa";
import { ContextMenu } from "../Context/Provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Register } from "../Services/User";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const { model, setModel } = useContext(ContextMenu);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const queryClient = useQueryClient();

  // To create an account
  const mutation = useMutation({
    mutationFn: () => Register(formData),
    onSuccess: () => {
      toast.success("Registration successful!");
      queryClient.invalidateQueries(["register"]);
    },
    onError: (error) => {
      toast.error(`There was an error: ${error.message}`);
    },
  });

  //Mutation State
  const { isPending } = mutation;

  // Dynamically update fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // Trigger the mutation on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(); // Trigger the mutation
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
        <div className="flex justify-between gap-2">
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              type="submit"
              disabled={isPending}
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
