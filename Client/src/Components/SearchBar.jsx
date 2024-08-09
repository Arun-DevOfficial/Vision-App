import { useRef } from "react";
import { X } from "lucide-react";

export default function SearchBar({ onClose }) {
  const modalRef = useRef();

  // Close modal when clicking outside of the modal content
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="bg-white/20 fixed inset-0 flex flex-col min-h-screen w-full justify-start items-center font-poppins backdrop-blur-md"
        ref={modalRef}
        onClick={closeModal}
      >
        <div className="self-end p-4 cursor-pointer" onClick={onClose}>
          <X size={50}/>
        </div>
        <div className="text-center my-52 flex flex-col gap-5 w-[425px]">
          <p>Search for:</p>
          <input
            type="text"
            placeholder="Type Keywords.."
            className="bg-transparent p-8 border-b text-5xl placeholder:text-white placeholder:text-5xl focus:outline-none"
          />
          <p>Press Enter to begin your search</p>
        </div>
      </div>
    </>
  );
}
