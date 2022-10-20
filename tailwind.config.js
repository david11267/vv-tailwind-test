/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      GTAmericaExpandedRegular: ["GT America Expanded", "sans-serif"],
      GTAmericaExpandedBlack: ["sam", "sans-serif"],
      FuzzyBubble: ["Fuzzy Bubbles", "cursive"],
      GtAmericaCompressed: ["GT America Compressed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
