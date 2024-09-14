import { useContext, useEffect } from "react";
import DefaultBanner from "../assets/DefaultBanner.png";
import { useMutation } from "@tanstack/react-query";
import { handleBlogBannerUpload } from "../Services/API";
import { Toaster, toast } from "react-hot-toast";
import { ContextMenu } from "../Context/Provider";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../Components/tools.component";

export default function BlogEditor() {
  // const [file, setFile] = useState(null); // Hold the selected file
  const {
    blog: { title, banner, content, tags, desc },
    setBlog,
  } = useContext(ContextMenu);

  //useEffect
  useEffect(() => {
    let editor = new EditorJS({
      holderId: "text-Editor",
      data: "",
      tools: tools,
      placeholder: "Let's write an awesome story",
    });
  }, []);
  // API CALLS
  const mutation = useMutation({
    mutationFn: (newFormData) => handleBlogBannerUpload(newFormData),
    onSuccess: (response) => {
      // setFile(response.url);
      setBlog((prevBlog) => ({ ...prevBlog, banner: response.url }));
      toast.success("Upload Sucess..😊");
    },
    onError: (error) => {
      console.log("Error during upload:", error.message);
      toast.error("Upload Failed! 😔");
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
      // Call the mutation to upload the file
      mutation.mutate(formData);
    }
  };

  //Handle Key Action
  const handleTitleKeyDown = (e) => {
    if (e.keycode == 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    let input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    //Updata blog context
    setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }));
  };

  const handleBlogBannerError = (e) => {
    let img = e.target;
    img.src = DefaultBanner;
  };
  return (
    <>
      {/* Blog Navbar */}
      <nav className="p-5 flex justify-between font-poppins">
        <div className="flex items-center gap-4">
          <a href="/" className="font-bold text-3xl cursor-pointer font-title">
            Vision
          </a>
          <p className="font-medium max-md::hidden text-black line-clamp-1 w-full">
            New Blog
          </p>
        </div>
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
          {/* Blog Banner */}
          <div className="relative aspect-video hover:opacity-80 border-4 bg-white border-grey">
            <label htmlFor="uploadBanner">
              <img
                // src={file ? file : DefaultBanner} // Display uploaded image preview
                src={banner}
                alt="Blog"
                onError={handleBlogBannerError}
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
          {/* Blog Title */}
          <textarea
            placeholder="Blog Title"
            className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 font-poppins"
            onKeyDown={handleTitleKeyDown}
            onChange={handleTitleChange}
          ></textarea>
          <hr className="w-full opacity-40 mb-5" />
          <div id="text-Editor" className="font-gelasio"></div>
        </div>
      </section>
      <Toaster />
    </>
  );
}
