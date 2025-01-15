/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        foundersGrotesk: ["FoundersGrotesk-Semibold", "sans-serif"],
        neueMontreal: ["NeueMontreal-Regular", "sans-serif"],
        icomoon: ["icomoon", "sans-serif"],
        testCondensed: ["Test_Founders_Grotesk_X-Cond_SmBd", "sans-serif"],
      },
    },
  },
  plugins: [],
};
