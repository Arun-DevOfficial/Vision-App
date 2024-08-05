import { useState } from "react";
import Popover from "./Popover";
import { MenuIcon } from "lucide-react";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchModel, setSearchModel] = useState(true);
  return (
    <>
      <nav className="flex justify-between items-center container p-5 font-poppins text-white">
        <div className="md:flex gap-5 items-center">
          <a href="/" className="font-bold text-3xl cursor-pointer">
            Vision
          </a>
          <ul className="hidden md:flex gap-8 items-center">
            <li className="font-medium cursor-pointer text-sm text-white/40 hover:text-white">
              Our Story
            </li>
            <li className="font-medium cursor-pointer text-sm text-white/40 hover:text-white">
              Write
            </li>
            <li className="font-medium cursor-pointer text-sm text-white/40 hover:text-white">
              Gadgets
            </li>
            <li className="font-medium cursor-pointer text-sm text-white/40 hover:text-white">
              Life Style
            </li>
            <li className="font-medium cursor-pointer text-sm text-white/40 hover:text-white">
              Contact
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-white font-poppins text-sm"
          >
            Sign Up
          </button>
          {open && <Popover onClose={() => setOpen(!open)} />}
          <div
            className="bg-white/20 py-2 px-5 rounded cursor-pointer flex gap-2 items-center"
            onClick={() => setSearchModel(!searchModel)}
          >
            <Search size={15} />
            <p className="text-white/50">Type to Search..</p>
          </div>

          {searchModel && (
            <SearchBar onClose={() => setSearchModel(!searchModel)} />
          )}
        </div>
        <div className="md:hidden">
          <MenuIcon className="text-3xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
}
