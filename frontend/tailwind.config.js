/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            md: '2rem',
            lg: '50px',
            xl: '120px'
        }
      },
      fontFamily: {
          poppins: 'Poppins, sans-serif'
      },
      extend: {
          colors: {
              "stream-dark": '#0A071B',
              "stream-gray": '#8C87A2',
              "softpur": '#3D3762',
          }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
