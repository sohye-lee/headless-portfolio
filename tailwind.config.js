/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        contrast: "#000",
        primary: "#4158D0",
        secondary: "#555D66",
        tertiary: "#3CCA4A",
        base: "#fff",
        stone: "#292524",
      },
    },
  },
  plugins: [],
};
