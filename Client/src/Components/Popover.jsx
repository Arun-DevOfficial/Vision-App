import { X } from "lucide-react";
import { useContext, useRef } from "react";
import Login from "./Login";
import { ContextMenu } from "../Context/Provider";
import Signup from "./Signup";

export default function Popover({ onClose }) {
  const modelRef = useRef();
  const { model } = useContext(ContextMenu);
  //Popup model
  const closeModel = (e) => {
    if (modelRef.current === e.target) return onClose();
  };

  return (
    <div
      className="fixed inset-0 min-h-screen flex justify-center items-center bg-[#7a7a7a]/60 backdrop-blur-sm"
      ref={modelRef}
      onClick={closeModel}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-[900px] h-[600px] flex">
        <X
          className="absolute top-6 right-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
          onClick={onClose}
        />
        <div className="flex w-full">
          <div className="w-1/2 bg-neutral-950 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vision Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-12 flex items-center justify-center">
            {!model ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}
