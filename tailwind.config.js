/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#53b6ff",
        hover:"#2647FF",
        white: "#ffff",
        dark: "#091E3E",
        light_gray: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
