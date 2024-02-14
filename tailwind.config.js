/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/background/hero_image.webp')",
        whiteCut: "url('/assets/images/pocker/white_cut.svg')",
        jackpot: "url('/assets/images/background/jackpot.webp')",
        propia: "url('/assets/images/background/lanza.webp')",
        luxury: "url('/assets/images/background/luxury.webp')",
        platForm: "url('/assets/images/background/plat_forma.webp')",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "3xl": "32px",
        "5xl": "48px",
        "7xl": "72px",
      },
      colors: {
        darkBlue: "#00141b",
        lightGreen: "#7af57a",
        darkSilver: "#80898D",
        darkSky: "#334349",
        midGreen: "#367E6D",
        midBlack: "#041C23",
        silver: "#FFFFFF80",
        lightWhite: "#FFFFFF1A",
        lightBlack: "#191919",
        lightSky: "#51C8EF",
      },
    },
  },
  plugins: [],
};
