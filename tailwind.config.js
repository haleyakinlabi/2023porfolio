/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF0000',
        'white': '#FFFFFF',
        'pink' : '#FFC0CB',
        'grey' : '#D3D3D3',
        'darkgrey' : '#B5B5B5 '
      },
    }
  },
  plugins: [],
}

