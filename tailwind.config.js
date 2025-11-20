/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        "dark-bg": "#0F172A",
        "dark-card": "#1E293B",
        "dark-text": "#E2E8F0",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        navbar: "0 2px 20px rgba(0,0,0,0.25)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
