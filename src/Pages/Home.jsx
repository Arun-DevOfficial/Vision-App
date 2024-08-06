import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Home() {
  const styles = {
    backgroundImage:
      "linear-gradient(to right, white 70%, transparent 70%), url('https://images.pexels.com/photos/27275526/pexels-photo-27275526/free-photo-of-cappadocia.jpeg')",
  };

  return (
    <>
      <div
        className="h-screen bg-gradient-to-r from-white bg-cover bg-center"
        style={styles}
      >
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
