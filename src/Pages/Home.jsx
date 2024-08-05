import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full bg-Home bg-cover bg-center">
        <div className="w-full md:w-[60%] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </section>
    </>
  );
}
