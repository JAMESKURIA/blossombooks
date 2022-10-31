/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rebeccapurple",
        "secondary-dark": "#ffbf00",
        "secondary-accent": "#a67c00",
        "secondary-light": "#c0bc64",
        "accent-dark": "#e8ecd9",
        "light-dark": "#333",
        "light-accent": "#4d4d4d"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
