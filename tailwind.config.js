/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Open Sans", "sans-serif"],
        Super: "url(./assets/GT-Super-Text-Regular-Trial.otf)",
      },
      backgroundImage: {
        hero: "url('https://cdn.pixabay.com/photo/2023/07/31/13/42/anime-art-8161031_1280.png')",
        Home:"url('https://preview.colorlib.com/theme/avision/images/home_slider.jpg.webp')"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
