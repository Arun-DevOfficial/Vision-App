/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Super: "url(./assets/GT-Super-Text-Regular-Trial.otf)",
      },
      backgroundImage:{
        'hero': "url('https://cdn.pixabay.com/photo/2024/05/30/19/37/girl-8799169_1280.jpg')",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
