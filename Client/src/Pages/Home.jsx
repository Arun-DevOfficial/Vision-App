import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <div className="border border-b">
          <Navbar />
        </div>
        <Carousel />
        <Hero />
      </header>
    </>
  );
}
