import { useContext } from "react";
import { ContextMenu } from "../Context/Provider";

export default function PublishForm() {
  const {
    blog: { title, banner, desc },
    setBlog,
    blog,
  } = useContext(ContextMenu);

  const handleBlogTitleChange = (e) => {
    // setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }));
    console.log(blog);
  };
  const handleBlogDescChange = (e) => {
    // setBlog((prevBlog) => ({ ...prevBlog, desc: e.target.value }));
    console.log(blog);
  };
  return (
    <>
      <section className="p-5 bg-black flex justify-center items-center min-h-svh">
        <div
          id="publish-Form"
          className="flex gap-6 w-5/6 bg-white shadow-xl h-[500px] rounded p-4"
        >
          <div id="preview-blog">
            <img src={banner} alt="Blog Banner" />
          </div>
          <form>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="title"
                onChange={handleBlogTitleChange}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                className="resize-none"
                placeholder="Description"
                onChange={handleBlogDescChange}
              ></textarea>
            </div>
            <div>
              <label>Tags</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
