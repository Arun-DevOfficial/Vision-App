import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Calendar } from "lucide-react";

export default function Carousel() {
  return (
    <div className="hidden md:flex justify-center items-center p-10 relative z-10">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={1} // Default to 1 slide per view for better responsiveness
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="font-title"
        >
          {[
            {
              imageUrl:
                "https://i.pinimg.com/564x/eb/a2/38/eba238fa04432cf1d06e3d23723adfe8.jpg",
              category: "Travel",
              description: "Travel is a great way to explore.",
            },
            {
              imageUrl:
                "https://i.pinimg.com/564x/6f/d8/56/6fd856ad778fad4d2d3c5f4b33490695.jpg",
              category: "Sports",
              description: "Engage in various sports activities.",
            },
            {
              imageUrl:
                "https://i.pinimg.com/564x/00/d5/f3/00d5f3ee9d4a97f2e85c62fb9701185d.jpg",
              category: "Technology",
              description: "Discover the latest in technology.",
            },
            {
              imageUrl:
                "https://i.pinimg.com/564x/af/cc/92/afcc92c62915ea14a2d5650058a03828.jpg",
              category: "Nature",
              description: "Enjoy the beauty of nature.",
            },
            {
              imageUrl:
                "https://i.pinimg.com/564x/15/25/c3/1525c37b7f67f319327f6030cf2b202b.jpg",
              category: "Artificial Intelligence",
              description: "Explore the world of AI.",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index} className="flex gap-5 items-center p-4">
              <img
                src={slide.imageUrl}
                alt={slide.category}
                className="w-32 h-32 rounded-full flex-shrink-0"
              />
              <div>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  {slide.category}
                </span>
                <p className="text-xl py-2 text-black font-medium">
                  {slide.description}
                </p>
                <p className="flex items-center gap-2 text-slate-600">
                  <Calendar size={18} />
                  Dec 22, 2024
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
