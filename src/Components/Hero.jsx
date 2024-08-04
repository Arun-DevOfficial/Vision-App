import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-3">
      <div className="p-6">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
          New post
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Browse Our Resources
        </h1>
        <p className="mt-4 text-gray-700">
          Your gateway to the latest insights and expert opinions shaping the future.
        </p>
        
        {/* Banner Section */}
        <div className="relative bg-hero bg-cover bg-center rounded-2xl mt-4 h-[400px] md:h-[500px] lg:h-[650px] w-full overflow-hidden">
          <div className="absolute bottom-0 w-full flex items-end p-6 md:p-8 bg-white/20 backdrop-blur text-white">
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold capitalize">
                Design in the Age of AI: How to Adapt Lazily
              </h2>
              <p className="my-4 text-slate-200 text-base md:text-lg lg:text-xl">
                Effortlessly Embrace the Future: Adapting Design Strategies in the Age of AI.
              </p>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/04/16/21/11/ai-generated-8700789_1280.jpg"
                    alt="AI Generated Image"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-sm md:text-base">Elisa, Tokyo, London</p>
                  <div className="flex items-center gap-3">
                    <Calendar className="border rounded-full p-1" size={24} />
                    <p className="text-sm md:text-base">Aug 04, 2024</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 md:gap-3 items-center mt-4 md:mt-0">
                  <li className="text-white border rounded-full cursor-pointer px-4 py-1 text-xs md:text-sm font-medium">
                    UI/UX
                  </li>
                  <li className="text-white border rounded-full cursor-pointer px-4 py-1 text-xs md:text-sm font-medium">
                    Design System
                  </li>
                  <li className="text-white border rounded-full cursor-pointer px-4 py-1 text-xs md:text-sm font-medium">
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
