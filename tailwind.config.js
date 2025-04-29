/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#5f6fff",
        "custom-black": "#333",
      },
    },
  },
  plugins: [],
};
