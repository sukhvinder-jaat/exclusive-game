/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        xl: "20px",
        "3xl": "32px",
        "5xl": "48px",
        "7xl": "72px",
      },
      colors: {
        darkBlue: "#00141b",
        lightGreen: "#7af57a",
      },
    },
  },
  plugins: [],
};
