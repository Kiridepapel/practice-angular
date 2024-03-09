/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "navbar": "76px",
        "footer": "76px",
      },
    },
  },
  plugins: [],
}

