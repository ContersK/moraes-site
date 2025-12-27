/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0f172a", // Azul escuro padrão
        "brand-darker": "#020617", // NOVO: Azul quase preto (para o Header combinar com o logo)
        "brand-blue": "#0066cc",
        "brand-orange": "#ff8800",
      },
    },
  },
  plugins: [],
};
