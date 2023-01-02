/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#649c16",
        secondary: "#169a9c",
      },
    },
  },
  plugins: [],
};
