import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="container p-8 flex gap-24 mt-9">
        <div className="relative">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_65-960x520.jpg"
            alt=""
            className="w-[52rem] rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute bottom-5 left-7 text-white font-Inter">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 text-white border border-white/20 cursor-pointer hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
              Fashion
            </span>
            <h2 className="font-semibold text-4xl leading-relaxed">
              Budget Issues Force The Our <br /> To Be Cancelled
            </h2>
            <div className="flex gap-3 my-4">
              <p className="font-medium uppercase text-slate-100">By Admin</p>
              <p className="flex items-center gap-2 text-slate-100">
                <Calendar size={18} />
                Dec 22,2024
              </p>
              <p className="font-medium uppercase text-slate-100">By Admin</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5">
            <img
              src="https://i.pinimg.com/736x/15/39/47/15394713122f2f372c19502cf4d3c8b6.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                Technology
              </span>
              <p className="text-xl py-2 text-black font-medium font-title">
                African Nation Are Strugling To Save Their Wildlife.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </div>
          <div className="flex gap-5 max-w-lg">
            <img
              src="https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                Web Development
              </span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Crafty Cook and Decorate all of our food dishes with love
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img
              src="https://i.pinimg.com/564x/cc/aa/ac/ccaaac1aae8d1ead42db8032f68664bb.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                Health & Care
              </span>
              <p className="text-xl py-2 text-black font-medium font-title">
                African Nation Are Strugling To Save Their Wildlife.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
