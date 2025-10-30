/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // include every file that contains className
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left-right": {
          "0%, 100%": { transform: "trnslateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        animation: {
          "slide-left-right": "slide-left-right 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "*": { boxSizing: "border-box" },
        "*::before": { boxSizing: "border-box" },
        "*::after": { boxSizing: "border-box" },
      });
    }),
  ],
};
