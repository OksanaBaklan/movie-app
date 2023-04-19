/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      // => @media (min-width: 620px) { ... }

      md: "976px",
      // => @media (min-width: 920px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        body: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#94a3b8",
      },
    },
  },
  plugins: [],
};
