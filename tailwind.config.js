/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        vulcan: {
          50: "#f3f5fc",
          100: "#e6ebf8",
          200: "#c7d5f0",
          300: "#96b2e3",
          400: "#5e8bd2",
          500: "#396cbe",
          600: "#2954a0",
          700: "#224382",
          800: "#203b6c",
          900: "#1f335b",
          950: "#090e1a",
        },
      },
    },
  },
  plugins: [],
};
