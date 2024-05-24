/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "accent-primary": "#219ebc",
        "accent-secondary": "#c1121f",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

