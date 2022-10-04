/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1880px",
      },
      gridTemplateColumns: {
        about: "0.47fr 1fr",
        referal: "1fr 0.6fr",
      },
      backgroundColor: {
        primary: "#2B2E43",
        secondary: "#1E2335",
      },
      color: {
        primary: "#2B2E43",
      },
    },
  },
  plugins: [],
};
