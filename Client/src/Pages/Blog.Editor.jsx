import { useRef } from "react";
import DefaultBanner from "../assets/DefaultBanner.png";
export default function BlogEditor() {
  const blogBannerRef = useRef();

  const handleBannerUpload = () => {
    // const img = e.target.file[0];
    const img =
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80";

    if (!img) return (blogBannerRef.current.src = img);
  };

  return (
    <>
      {/* Blog Navbar */}
      <nav className="p-5 flex justify-between font-poppins">
        <a href="/" className="font-bold text-3xl cursor-pointer font-title">
          Vision
        </a>
        <div className="flex gap-3">
          <button className="bg-black rounded-full font-medium text-white px-5 py-2">
            Publish
          </button>
          <button className="bg-[#ededed] font-medium rounded-full px-5 py-2">
            Save Draft
          </button>
        </div>
      </nav>
      {/* Blog Editor */}
      <section>
        <div className="w-full max-w-[900px] mx-auto p-4">
          <div className="relative aspect-video hover:opacity-80 border-4 bg-white border-grey">
            <label htmlFor="uploadBanner">
              <img
                ref={blogBannerRef}
                src={DefaultBanner}
                alt="Blog"
                className="z-20 bg-cover cursor-pointer bg-center"
              />
              <input
                type="file"
                id="uploadBanner"
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handleBannerUpload}
              />
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
