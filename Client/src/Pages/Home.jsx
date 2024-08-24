import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Carousel />
        <Hero />
        <Blog />
      </header>
    </>
  );
}
