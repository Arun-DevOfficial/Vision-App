import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Slider() {
  const Ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlide, setTotalSlide] = useState(0);

  useEffect(() => {
    if (Ref.current) {
      const total = Ref.current.children.length;
      setTotalSlide(total);
      showSlide(1); // Show the first slide initially
    }
  }, [Ref]);

  const handleNextSlide = () => {
    if (currentSlide < totalSlide) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      showSlide(newSlide);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 1) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      showSlide(newSlide);
    }
  };

  const showSlide = (slideNumber) => {
    const slides = Ref.current.children;
    for (let index = 0; index < totalSlide; index++) {
      const element = slides[index];
      if (slideNumber === index + 1) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  };

  return (
    <>
      <section>
        <div className="relative">
          <ul ref={Ref}>
            <li className="h-[50vh] relative">
              <img
                src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 1"
                className="h-full object-center object-cover w-full"
              />
              <div className="absolute top-0 left-0 flex w-full h-full">
                <h1 className="text-4xl font-bold text-white my-auto w-full text-center px-20">
                  Heading 1
                </h1>
              </div>
            </li>
            <li className="h-[50vh] relative hidden">
              <img
                src="https://images.pexels.com/photos/25329456/pexels-photo-25329456/free-photo-of-mountain-on-horizon-and-its-reflection-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 2"
                className="h-full object-center object-cover w-full"
              />
              <div className="absolute top-0 left-0 flex w-full h-full">
                <h1 className="text-4xl font-bold text-white my-auto w-full text-center px-20">
                  Heading 2
                </h1>
              </div>
            </li>
            <li className="h-[50vh] relative hidden">
              <img
                src="https://images.pexels.com/photos/1054201/pexels-photo-1054201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 3"
                className="h-full object-center object-cover w-full"
              />
              <div className="absolute top-0 left-0 flex w-full h-full">
                <h1 className="text-4xl font-bold text-white my-auto w-full text-center px-20">
                  Heading 3
                </h1>
              </div>
            </li>
          </ul>
          <div className="flex items-center absolute top-0 left-0 h-full w-full justify-between p-5">
            <div className="my-auto w-full flex justify-between">
              <ArrowLeft
                className="bg-white shadow-black/40 rounded-full p-2 shadow-lg cursor-pointer"
                size={35}
                onClick={handlePrevSlide}
              />
              <ArrowRight
                className="bg-white shadow-black/40 rounded-full p-2 shadow-lg cursor-pointer"
                size={35}
                onClick={handleNextSlide}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
