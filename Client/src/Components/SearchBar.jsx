import { useRef, useState } from "react";
import { X, Search } from "lucide-react";

export default function SearchBar({ onClose }) {
  const modalRef = useRef();
  const [search, setSearch] = useState("");

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      console.log(search);
      onClose(); // Close modal after search
    }
  };

  return (
    <>
      <div
        className="bg-white fixed inset-0 flex flex-col min-h-screen w-full justify-start items-center backdrop-blur-md font-Inter"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="self-end p-4 cursor-pointer relative" onClick={onClose}>
          <X size={50} />
        </div>
        <div className="text-center my-52 flex flex-col gap-5">
          <p>Search for:</p>
          <div className="flex gap-3 items-center justify-center">
            <Search size={56} className="mr-3 flex-shrink-0 text-neutral-600 hidden md:block" />
            <input
              type="text"
              placeholder="Type Keywords.."
              className="bg-transparent p-8 border-b text-xl md:text-3xl lg:text-5xl placeholder:text-3xl md:placeholder:text-5xl focus:outline-none font-poppins text-ellipsis overflow-hidden whitespace-nowrap placeholder:text-neutral-900 placeholder:text-center placeholder:font-title leading-relaxed"
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput} // Handle search on 'Enter'
            />
          </div>
          <p>Press Enter to begin your search</p>
        </div>
      </div>
    </>
  );
}
