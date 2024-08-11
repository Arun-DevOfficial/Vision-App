import { useState } from "react";
import Popover from "./Popover";
import { MenuIcon } from "lucide-react";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";
import Write from "../assets/Write.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchModel, setSearchModel] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center container p-5">
        <div className="md:flex gap-16 items-center">
          <a href="/" className="font-bold text-3xl cursor-pointer font-title">
            Vision
          </a>
          <div
            className=" bg-gray-200/50 border border-gray-300 py-3 px-4 w-64 rounded-full cursor-pointer md:flex gap-3 items-center hidden"
            onClick={() => setSearchModel(!searchModel)}
          >
            <Search size={20} className="text-gray-400" />
            <p className="text-slate-500">Type to Search..</p>
          </div>
          {searchModel && (
            <SearchBar onClose={() => setSearchModel(!searchModel)} />
          )}
        </div>
        <div className="flex gap-8">
          <button className="text-slate-500 flex items-center gap-2">
            <img src={Write} alt="Write" className="w-5" />
            Write
          </button>
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-md font-medium bg-slate-900 text-white px-8 py-2 rounded-full"
            >
              Sign In
            </button>
            {open && <Popover onClose={() => setOpen(!open)} />}
          </div>
          <div className="md:hidden">
            <MenuIcon className="text-3xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}
