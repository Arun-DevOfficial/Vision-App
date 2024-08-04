import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto font-poppins leading-relaxed p-5 md:p-12">
      <div>
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
          New post
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-4 mb-1 font-super">
          Browse Our New Resources
        </h1>
        <p className="mb-5 text-slate-600 text-lg pl-1">
          Discover ideas that shape the future.
        </p>
        <div className="bg-hero bg-cover bg-center rounded-2xl">
          <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center rounded-2xl bg-hero bg-center bg-cover flex items-end text-white overflow-hidden">
            <div className="w-full bg-white/10 backdrop-blur-sm p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
                Design in the Age of AI: How to Adapt Lazily.
              </h1>
              <p className="my-4 text-slate-200 pl-2 text-base md:text-lg lg:text-xl">
                Effortlessly Embrace the Future: Adapting Design Strategies in
                the Age of AI.
              </p>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/04/16/21/11/ai-generated-8700789_1280.jpg"
                    alt="AI Generated Image"
                    className="w-12 rounded-full"
                  />
                  <p className="location text-sm md:text-base">
                    Elisa, Tokyo, London
                  </p>
                  <div className="flex gap-3 items-center">
                    <Calendar className="border rounded-full p-1" size={30} />
                    <p className="text-sm md:text-base">Aug 04, 2024</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 md:gap-3 items-center mt-4 md:mt-0">
                  <li className="text-white border rounded-full cursor-pointer px-6 py-1 text-sm md:text-base font-medium">
                    UI/UX
                  </li>
                  <li className="text-white border cursor-pointer rounded-full px-6 py-1 text-sm md:text-base font-medium">
                    Design System
                  </li>
                  <li className="text-white font-medium cursor-pointer border rounded-full px-6 py-1 text-sm md:text-base">
                    AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
