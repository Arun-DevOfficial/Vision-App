import { useContext, useEffect } from "react";
import DefaultBanner from "../assets/DefaultBanner.png";
import { useMutation } from "@tanstack/react-query";
import { handleBlogBannerUpload } from "../Services/API";
import { Toaster, toast } from "react-hot-toast";
import { ContextMenu } from "../Context/Provider";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../Components/tools.component";

export default function BlogEditor() {
  const {
    blog: { title, banner, content, tags, desc },
    setBlog,
    textEditor,
    setTextEditor,
  } = useContext(ContextMenu);

  useEffect(() => {
    setTextEditor(
      new EditorJS({
        holderId: "text-Editor",
        data: "",
        tools: tools,
        placeholder: "Let's write an awesome story",
      })
    );
  }, [setTextEditor]);

  const mutation = useMutation({
    mutationFn: (newFormData) => handleBlogBannerUpload(newFormData),
    onSuccess: (response) => {
      setBlog((prevBlog) => ({ ...prevBlog, banner: response.url }));
      toast.success("Upload Successful 😊");
    },
    onError: (error) => {
      console.error("Error during upload:", error.message);
      toast.error("Upload Failed! 😔");
    },
  });

  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    if (img) {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("folder", "content image");
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      mutation.mutate(formData);
    }
  };

  const handleTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    let input = e.target;
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
    setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }));
  };

  const handleBlogBannerError = (e) => {
    e.target.src = DefaultBanner;
  };

  const handlePublishEvent = () => {
    // if (!banner) return toast.error("Upload a blog banner to publish.");
    // if (!title) return toast.error("Please provide a blog title.");

    if (textEditor.isReady) {
      textEditor
        .save()
        .then((data) => {
          // Validate the data
          if (!data || !Array.isArray(data.blocks)) {
            toast.error("Invalid data format.");
            console.error("Invalid data:", data);
            return;
          }

          console.log("Published blog data:", data);
          // Continue with your publish logic
        })
        .catch((error) => {
          toast.error("Failed to save blog content.");
          console.error("Error saving data:", error);
        });
    }
  };

  return (
    <>
      <nav className="p-5 flex justify-between font-poppins">
        <div className="flex items-center gap-4">
          <a href="/" className="font-bold text-3xl cursor-pointer font-title">
            Vision
          </a>
          <p className="font-medium max-md:hidden text-black line-clamp-1 w-full">
            New Blog
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePublishEvent}
            className="bg-black rounded-full font-medium text-white px-5 py-2"
          >
            Publish
          </button>
          <button className="bg-[#ededed] font-medium rounded-full px-5 py-2">
            Save Draft
          </button>
        </div>
      </nav>
      <section>
        <div className="w-full max-w-[900px] mx-auto p-4">
          <div className="relative aspect-video hover:opacity-80 border-4 bg-white border-grey">
            <label htmlFor="uploadBanner">
              <img
                src={banner || DefaultBanner}
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
          <textarea
            placeholder="Blog Title"
            className="text-4xl font-bold w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 font-poppins"
            onKeyDown={handleTitleKeyDown}
            onChange={handleTitleChange}
            value={title}
          />
          <hr className="w-full opacity-40 mb-5" />
          <div id="text-Editor" className="font-gelasio"></div>
        </div>
      </section>
      <Toaster />
    </>
  );
}
