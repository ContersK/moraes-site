/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0f172a",
        "brand-blue": "#0066cc",
        "brand-orange": "#ff8800",
      },
    },
  },
  plugins: [],
};
