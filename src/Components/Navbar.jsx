import Popover from "./Popover";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center container p-5 font-poppins">
        <a href="/" className="font-bold text-3xl cursor-pointer">
          Vision
        </a>
        <ul className="hidden md:flex gap-5 items-center">
          <li className="font-medium text-lg cursor-pointer hover:border-b-2 hover:text-slate-800 text-slate-600  hover:border-slate-800 border-transparent">
            Home
          </li>
          <li className="font-medium cursor-pointer hover:border-b-2 hover:text-slate-800 text-slate-600  hover:border-slate-800 border-transparent">
            About
          </li>
          <li className="font-medium cursor-pointer hover:border-b-2 hover:text-slate-800 text-slate-600  hover:border-slate-800 border-transparent">
            Category
          </li>
          <li className="font-medium cursor-pointer hover:border-b-2 hover:text-slate-800 text-slate-600  hover:border-slate-800 border-transparent">
            Articles
          </li>
          <li className="font-medium cursor-pointer hover:border-b-2 hover:text-slate-800 text-slate-600  hover:border-slate-800 border-transparent">
            Contact
          </li>
          <div className="hidden md:flex gap-6 items-center">
            <Popover />
            <button className="text-white bg-slate-900 hover:bg-slate-800 px-8 py-2 rounded-full cursor-pointer">
              Subscribe
            </button>
          </div>
        </ul>
        <div className="md:hidden">
          <MenuIcon className="text-3xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
}
