import { useState } from "react";
import Tabs from "./Tabs";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Blog() {
  const [searchModel, setSearchModel] = useState(false);

  const blog = [
    {
      id: 1,
      image: "https://example.com/images/blog1.jpg",
      title: "Understanding React Hooks",
      short_desc:
        "A deep dive into React Hooks, how they work, and why they are important for modern React development.",
      profile_by: {
        user_id: 101,
        name: "Jane Doe",
      },
      date: "2024-08-20",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg",
      title: "10 Tips for Better Web Performance",
      short_desc:
        "Explore essential tips and techniques to improve the performance of your web applications and ensure a smooth user experience.",
      profile_by: {
        user_id: 102,
        name: "John Smith",
      },
      date: "2024-08-22",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/cc/aa/ac/ccaaac1aae8d1ead42db8032f68664bb.jpg",
      title: "Introduction to TypeScript",
      short_desc:
        "Learn the basics of TypeScript, its features, and how it enhances JavaScript development with static typing.",
      profile_by: {
        user_id: 103,
        name: "Emily Johnson",
      },
      date: "2024-08-25",
    },
  ];

  return (
    <>
      <section className="container p-8 min-h-screen mt-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-5 items-start">
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex justify-between items-start">
                <Tabs />
                <div
                  className="bg-gray-200/50 border border-gray-300 py-3 px-4 w-64 rounded-full cursor-pointer md:flex gap-3 items-center hidden"
                  onClick={() => setSearchModel(!searchModel)}
                >
                  <Search size={20} className="text-gray-400" />
                  <p className="text-slate-500">Type to Search..</p>
                </div>
                {searchModel && (
                  <SearchBar onClose={() => setSearchModel(!searchModel)} />
                )}
              </div>
              <div className="mt-16 max-w-4xl mx-auto">
                {blog.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center space-x-6 mb-8"
                  >
                    <img
                      src={content.image}
                      width="640"
                      height="360"
                      alt={content.title}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">{content.title}</div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <img
                            src="/placeholder-user.jpg"
                            alt={content.profile_by.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm font-medium">
                            {content.profile_by.name}
                          </span>
                        </div>
                        <div className="h-4 border-l border-gray-300 mx-2"></div>
                        <span className="text-sm">{content.date}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {content.short_desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <article className="max-w-md text-justify p-6 border-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              repellat nulla.
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
