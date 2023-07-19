/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#18122B',
        'primary-light-navy': '#393053',
        'secondary-navy': '#443C68',
        'secondary-light-navy': '#635985',
        'primary-light-grey': '#D4D4D4',
        'secondary-light-grey': '#BCBCBC',
        highlight: '#777777',
      },
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
