/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        background: "#f5f5f5",
        accent: "#e67e22",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
