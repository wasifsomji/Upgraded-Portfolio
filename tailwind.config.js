/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Dark blue for the main background
        secondary: "#ffffff", // White for text and highlights
        tertiary: "#112240", // Slightly lighter blue for cards or sections
        "dark-blue": "#020c1b", // Even darker blue for backgrounds or accents
        "blue-100": "#0b1e3f", // Even lighter blue for borders or accents
        "accent-cyan": "#64ffda", // Vibrant cyan for buttons or links
        "accent-yellow": "#ffd700", // Yellow for highlights or secondary actions
      },
      boxShadow: {
        card: "0px 10px 20px -5px rgba(0, 0, 0, 0.3)", // Subtle shadow for cards
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/abstract.jpg')", // Optional background image
      },
    },
  },
  plugins: [],
};
