import { useState, useEffect } from "react";
import Popover from "./Popover";
import { MenuIcon, Search } from "lucide-react";
import SearchBar from "./SearchBar";
import Write from "../assets/Write.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchModel, setSearchModel] = useState(false);

  // Popup for Login user
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timeoutId); // Correctly clear the timeout
  }, []); // Add an empty dependency array to only run this effect once after initial render

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
            <Link
              to="/Write"
              className="text-slate-500 items-center gap-2 font-Inter hidden md:flex"
            >
              <img src={Write} alt="Write" className="w-5" />
              Write
            </Link>
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="text-md font-medium bg-slate-900 text-white px-8 py-2 rounded-full font-Inter"
              >
                Sign In
              </button>
              {open && <Popover onClose={() => setOpen(false)} />}
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
