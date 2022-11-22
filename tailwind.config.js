/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          100: "#D9D9D9",
          200: "#94A3B8",
          300: "#C98CF1",
          400: "#7B78E5",
          500: "#041833",
          600: "#04244F",
          700: "#154580",
        },
      },
    },
  },
  plugins: [],
};
