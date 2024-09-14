import Sidebar from "./Sidebar";
import Data from "../Json/Blog.json";
import { CiCircleMinus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { PiHandsClappingLight } from "react-icons/pi";
import { LiaComments } from "react-icons/lia";
import Tabs from "./Tabs";

export default function Blog() {
  return (
    <>
      <section>
        <div className="container mx-auto p-8 min-h-screen pt-36 flex gap-8">
          <div className="w-full">
            <h1 className="text-4xl font-bold font-Inter mb-8 text-gray-900">
              Popular Stories
            </h1>
            <div className="w-full max-w-[30%]">
              <Tabs />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Data?.blogs?.map((blog) => (
                <div className="bg-white rounded-lg p-6" key={blog.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={blog.profileImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {blog.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {blog.displayName}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-40 mb-4 overflow-hidden rounded">
                    <img
                      src={blog.bannerImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Blog Title */}
                  <h2 className="text-2xl lg:text-xl font-extrabold text-gray-900 mb-4">
                    {blog.title}
                  </h2>
                  {/* Blog Content */}
                  <p className="text-lg text-justify text-gray-700 leading-relaxed mb-6">
                    {blog.content}
                    <a
                      href="#"
                      className="ml-2 text-neutral-900 hover:underline"
                    >
                      read more..
                    </a>
                  </p>
                  <div className="flex justify-between items-center text-gray-600 text-sm">
                    <div className="flex gap-6 items-center">
                      <p>{blog.date}</p>
                      <p className="flex gap-2 items-center">
                        <PiHandsClappingLight className="text-xl text-gray-700" />
                        {blog.likeCount}
                      </p>
                      <p className="flex gap-2 items-center">
                        <LiaComments className="text-xl text-gray-700" />
                        {blog.commentCount}
                      </p>
                    </div>
                    {/* Action Icons */}
                    <div className="flex gap-4 items-center">
                      <CiCircleMinus className="text-xl text-gray-500 cursor-pointer hover:text-gray-800" />
                      <BsThreeDots className="text-xl text-gray-500 cursor-pointer hover:text-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-24 flex justify-center">
              <button className="bg-white flex gap-2 items-end hover:bg-neutral-900 text-neutral-900 hover:text-white font-Inter font-semibold px-7 py-2 rounded-full border border-slate-200">
                Load More
              </button>
            </div>
          </div>
          {/* Sidebar */}
          <Sidebar />
        </div>
      </section>
    </>
  );
}
