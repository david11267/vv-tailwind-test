/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GTAmericaExpandedRegular: ["GT America Expanded", "sans-serif"],
        GTAmericaExpandedBlack: ["GT America Expanded Black", "sans-serif"],
        FuzzyBubble: ["Fuzzy Bubbles", "cursive"],
        GtAmericaCompressed: ["GT America Compressed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
