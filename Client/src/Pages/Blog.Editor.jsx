import { useState, useRef } from "react";
import DefaultBanner from "../assets/DefaultBanner.png";
import { useMutation } from "@tanstack/react-query";
import { handleBlogBannerUpload } from "../Services/API";

export default function BlogEditor() {
  const blogBannerRef = useRef();
  const [file, setFile] = useState(null); // Hold the selected file

  // API CALLS
  const mutation = useMutation({
    mutationFn: (newFormData) => handleBlogBannerUpload(newFormData),
    onSuccess: (response) => {
      setFile(response.url);
    },
    onError: (error) => {
      console.log("Error during upload:", error.message);
    },
  });

  //Setup Upload image to Cloudinary
  const handleBannerUpload = (e) => {
    const img = e.target.files[0]; // Get the first file
    console.log("File selected: ", img);
    //Check image
    if (img) {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("folder", "content image");
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      ); // Upload preset
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY); // CLOUDINARY_API_KEY
      console.log(formData);

      // Call the mutation to upload the file
      mutation.mutate(formData);
    }
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
                src={file ? file : DefaultBanner} // Display uploaded image preview
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
