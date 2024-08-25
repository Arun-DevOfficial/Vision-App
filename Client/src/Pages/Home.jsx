import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";
import TopStories from "../Components/TopStories";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Hero />
      <Blog />
      <TopStories />
      <Footer />
    </>
  );
}
