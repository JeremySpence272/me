/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        subrayada: ['"Montserrat Subrayada"', ...defaultTheme.fontFamily.sans],
        sourceSans: ["Source Sans 3", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
