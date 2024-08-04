import "@radix-ui/themes/styles.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <section className="min-h-screen bg-white/10 backdrop-blur-md sticky top-0">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}

export default App;
