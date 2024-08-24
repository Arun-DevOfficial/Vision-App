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
      <nav className="bg-white border-b relative z-20">
        <div className="flex justify-between items-center container p-5">
          <div className="md:flex gap-8 items-center divide-x-2">
            <a
              href="/"
              className="font-bold text-3xl cursor-pointer font-title"
            >
              Vision
            </a>
            <ul className="hidden md:flex gap-3 items-center pl-4 font-Inter">
              <li className="font-medium text-sm text-slate-600 cursor-pointer">
                Home
              </li>
              <li className="font-medium text-slate-600 cursor-pointer text-sm">
                Creator
              </li>
              <li className="font-medium text-slate-600 cursor-pointer text-sm">
                Trending
              </li>
              <li className="font-medium text-slate-600 cursor-pointer text-sm">
                Articles
              </li>
            </ul>
          </div>
          <div className="flex gap-8 items-center">
            <div
              className="cursor-pointer"
              onClick={() => setSearchModel(!searchModel)}
            >
              <Search size={20} className="text-gray-400" />
            </div>
            {searchModel && (
              <SearchBar onClose={() => setSearchModel(!searchModel)} />
            )}
            <button className="text-slate-500 items-center gap-2 font-Inter hidden md:flex">
              <img src={Write} alt="Write" className="w-5" />
              Write
            </button>
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="text-md font-medium bg-slate-900 text-white px-8 py-2 rounded-full font-Inter"
              >
                Sign In
              </button>
              {open && <Popover onClose={() => setOpen(!open)} />}
            </div>
            <div className="md:hidden flex items-center gap-3">
              <MenuIcon className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
