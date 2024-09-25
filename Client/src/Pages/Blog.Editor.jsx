import { useContext, useEffect, useCallback } from "react";
import DefaultBanner from "../assets/DefaultBanner.png";
import { useMutation } from "@tanstack/react-query";
import { handleBlogBannerUpload } from "../Services/API";
import { Toaster, toast } from "react-hot-toast";
import { ContextMenu } from "../Context/Provider";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../Components/tools.component";

export default function BlogEditor() {
  const {
    blog: { title, banner, content },
    blog,
    setBlog,
    textEditor,
    setTextEditor,
  } = useContext(ContextMenu);

  // EditorJS instance setup and cleanup
  useEffect(() => {
    const editor = new EditorJS({
      holderId: "text-Editor",
      data: content,
      tools: tools,
      placeholder: "Let's write an awesome story",
    });

    setTextEditor(editor);

    return () => {
      if (editor && editor.destroy) {
        editor.destroy(); // Cleanup on unmount
      }
    };
  }, [setTextEditor, content]);

  // Mutation for banner image upload
  const mutation = useMutation({
    mutationFn: (newFormData) => handleBlogBannerUpload(newFormData),
    onSuccess: (response) => {
      toast.dismiss(); // Dismiss the loading toast
      setBlog((prevBlog) => ({ ...prevBlog, banner: response.url }));
      toast.success("Upload Successful 😊");
    },
    onError: (error) => {
      toast.dismiss(); // Dismiss the loading toast
      console.error("Error during upload:", error.message);
      toast.error("Upload Failed! 😔");
    },
  });

  // Handle banner upload
  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    if (img) {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("folder", "content image");
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );

      // Display loading toast
      const toastId = toast.loading("Uploading banner...");

      mutation.mutate(formData, {
        onSettled: () => {
          toast.dismiss(toastId); // Dismiss toast once the mutation is settled
        },
      });
    }
  };

  const handleTitleKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }, []);
  //Dynamically update blog title height
  const handleTitleChange = useCallback(
    (e) => {
      const input = e.target;
      input.style.height = "auto";
      input.style.height = `${input.scrollHeight}px`;
      setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }));
    },
    [setBlog]
  );
  //To handle banner upload error
  const handleBlogBannerError = useCallback((e) => {
    e.target.src = DefaultBanner;
  }, []);

  //Publish blog content
  const handlePublishEvent = () => {
    if (!banner) return toast.error("Upload a blog banner to publish it.");
    if (!title) return toast.error("Please provide a blog title.");

    if (textEditor && textEditor.isReady) {
      textEditor
        .save()
        .then((data) => {
          if (data.blocks.length) {
            setBlog({ ...blog, content: data });
          } else {
            return toast.error(
              "Write something in your blog before publish it."
            );
          }
          console.log("Published blog data:", data);
        })
        .catch((error) => {
          toast.error("Failed to save blog content.");
          console.error("Error saving data:", error);
        });
    }
  };

  return (
    <>
      <section className="container mx-auto">
        <nav className="p-5 flex justify-between font-poppins">
          <a href="/" className="font-bold text-3xl cursor-pointer font-title">
            Vision
          </a>
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
                  src={banner}
                  alt="Blog Banner"
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
      </section>
    </>
  );
}
