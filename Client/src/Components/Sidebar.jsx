import Badge from "./Badge";
import { Facebook } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";

export default function Sidebar() {
  const profiles = [
    {
      username: "johndoe",
      displayName: "John Doe",
      profilePicture:
        "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_640.jpg",
    },
    {
      username: "Janiliya",
      displayName: "Jany",
      profilePicture:
        "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg",
    },
    {
      username: "Princess Alia",
      displayName: "Alia",
      profilePicture:
        "https://cdn.explorecams.com/storage/photos/pSBD3XcRv3_1600.jpg",
    },
    {
      username: "sarasmith",
      displayName: "Sara Smith",
      profilePicture:
        "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-5 font-Inter">
          Recommended topics
        </h2>
        <div className="grid grid-cols-4 gap-4 text-xs font-Inter">
          <Badge content={"tech"} />
          <Badge content={"music"} />
          <Badge content={"sports"} />
          <Badge content={"nature"} />
          <Badge content={"animal"} />
          <Badge content={"AI"} />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-5 font-Inter">Top Profiles</h2>
        {profiles.map((profile) => (
          <div
            className="flex justify-between items-center mb-4"
            key={profile.username} // Use a unique key here
          >
            <div className="flex items-center p-4 dark:bg-neutral-800">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={profile.profilePicture}
                  alt={profile.displayName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div className="ml-4">
                <div className="text-md font-semibold text-gray-900 dark:text-white font-title">
                  {profile.displayName}
                </div>
                <div className="text-sm text-gray-600 dark:text-neutral-300 font-Inter">
                  @{profile.username}
                </div>
              </div>
            </div>
            <Badge content={"Follow"} />
          </div>
        ))}
      </div>

      <div className="p-6">
        <h2 className="text-lg font-bold mb-5 font-Inter">
          Stay Connected with Us
        </h2>
        <div className="flex gap-5 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={15}
              className="bg-neutral-800 rounded-full w-10 h-10 transition-transform transform hover:translate-y-[-4px] duration-300 p-2 text-center text-white"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX
              size={15}
              className="bg-neutral-800 rounded-full w-10 h-10 transition-transform transform hover:translate-y-[-4px] duration-300 p-2 text-center text-white"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuInstagram
              size={24}
              className="bg-neutral-800 rounded-full w-10 h-10 transition-transform transform hover:translate-y-[-4px] duration-300 p-2 text-center text-white"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedin
              size={8}
              className="bg-neutral-800 rounded-full w-10 h-10 transition-transform transform hover:translate-y-[-4px] duration-300 p-2 text-center text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
