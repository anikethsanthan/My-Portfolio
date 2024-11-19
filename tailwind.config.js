/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'black': '0 4px 6px #000000', // Custom black shadow
      },
    },
  },
  plugins: [],
}

