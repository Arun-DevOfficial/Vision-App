import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Carousel />
        <Hero />
      </header>
    </>
  );
}
