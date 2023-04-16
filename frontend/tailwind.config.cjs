/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        primaryFade: "#05081540",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent: "#915eff",
        accentFade: "#915eff50",
        accentFade100: "#915eff90",
        accentFade200: "#915effcc",
        logoAccent: "#95a1f1",
        logoAccentFade: "#95a1f150",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "501px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/common/assets/ui/herobg.webp')",
      },
    },
  },
  plugins: [],
};