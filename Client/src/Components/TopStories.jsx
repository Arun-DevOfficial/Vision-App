import { Calendar } from "lucide-react";

export default function TopStories() {
  return (
    <>
      <article className="bg-[#faf7f5] py-20">
        <div className="container p-4">
          <h2 className="text-3xl font-bold text-neutral-800 font-Inter mb-4">
            Top Stories
          </h2>
          <div className="my-12 flex gap-5">
            <div>
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                alt="Music"
                className="w-80 rounded-lg"
              />
              <div className="py-6 max-w-sm text-balance">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 text-white border border-white/20 capitalize cursor-pointer hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  music
                </span>
                <h2 className="text-2xl py-2 font-title leading-relaxed">
                  How childhood viral infections may year 2021 Section
                </h2>
                <div className="flex gap-4">
                  <p className="font-medium uppercase">by admin</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={18} />
                    Dec 22,2024
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_13-551x431.jpg"
                alt="Music"
                className="w-80 rounded-lg"
              />
              <div className="py-6 max-w-sm text-balance">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 text-white border border-white/20 capitalize cursor-pointer hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  Animal
                </span>
                <h2 className="text-2xl py-2 font-title leading-relaxed">
                  How childhood viral infections may year 2021 Section
                </h2>
                <div className="flex gap-4">
                  <p className="font-medium text-neutral-800 uppercase">by admin</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={18} />
                    Dec 22,2024
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_66-551x431.jpg"
                alt="Music"
                className="w-80 rounded-lg"
              />
              <div className="py-6 max-w-sm text-balance">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 text-white border border-white/20 capitalize cursor-pointer hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  Travel
                </span>
                <h2 className="text-2xl py-2 font-title leading-relaxed">
                  How childhood viral infections may year 2021 Section
                </h2>
                <div className="flex gap-4">
                  <p className="font-medium uppercase">by admin</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={18} />
                    Dec 22,2024
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_23-551x431.jpg"
                alt="Music"
                className="w-72 rounded-lg object-cover"
              />
              <div className="py-6 max-w-sm text-balance">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 text-white border border-white/20 capitalize cursor-pointer hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  Health
                </span>
                <h2 className="text-2xl py-2 font-title leading-relaxed">
                  How childhood viral infections may year 2021 Section
                </h2>
                <div className="flex gap-4">
                  <p className="font-medium uppercase">by admin</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={18} />
                    Dec 22,2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
