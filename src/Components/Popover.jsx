// import { Button } from "@radix-ui/themes";
// import "@radix-ui/themes/styles.css";
// import { useState } from "react";

// export default function SignupForm() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         className="text-slate-600 font-poppins"
//         onClick={() => setOpen(!open)}
//       >
//         Sign Up
//       </button>
//       {open && (
//         <div
//           className="fixed inset-0 flex items-center font-poppins justify-center bg-[#999999] bg-opacity-50 p-5"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-[#ffffff] p-8 rounded-lg shadow-lg w-full max-w-md"
//             onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the backdrop
//           >
//             <h2 className="text-2xl font-bold text-center mb-6">
//               Create an Account
//             </h2>

//             <form>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="name"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Your Password"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-800"
//                 />
//               </div>
//               <div className="mb-4 flex justify-between items-center">
//                 <div className="my-6 flex gap-2">
//                   <input type="checkbox" name="Check" id="Check" />
//                   <label className="text-sm font-medium">
//                     Terms and Conditions
//                   </label>
//                 </div>
//                 <p className="text-slate-800 font-medium cursor-pointer hover:underline">
//                   Forget Password?
//                 </p>
//               </div>
//               <div className="flex items-center justify-between">
//                 <Button
//                   variant="solid"
//                   className="w-full text-white bg-slate-900 hover:bg-slate-800 py-3 rounded-full cursor-pointer"
//                 >
//                   Sign Up
//                 </Button>
//               </div>
//               <p className="text-center mt-4">
//                 Already have an account?{" "}
//                 <span className="text-slate-800 cursor-pointer hover:underline font-bold">
//                   Login.
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//     </>
//   );
// }

import { Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";

export default function SignupForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-slate-600 font-poppins"
        onClick={() => setOpen(!open)}
      >
        Sign Up
      </button>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#999999] bg-opacity-50 p-4 sm:p-6 lg:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the backdrop
          >
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
                <div className="flex gap-2">
                  <input type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms" className="text-sm font-medium">
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
                  className="w-full text-white bg-slate-900 hover:bg-slate-800 py-3 rounded-full cursor-pointer"
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
      )}
    </>
  );
}
