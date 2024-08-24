import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <header className="relative">
        {/* Navbar with higher z-index to stay on top */}
        <div className="border-b bg-white sticky top-0 backdrop-blur z-30">
          <Navbar />
        </div>
        <Carousel />
        <Hero />
      </header>
    </>
  );
}
