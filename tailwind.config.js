/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'primary-navy': '#18122B',
        // 'primary-light-navy': '#393053',
        // 'secondary-navy': '#443C68',
        // 'secondary-light-navy': '#635985',
        // 'primary-light-grey': '#D4D4D4',
        // 'secondary-light-grey': '#BCBCBC',
        // highlight: '#777777',
        'primary-navy': 'rgb(var(--color-primary-navy) / <alpha-value>)',
        'primary-light-navy':
          'rgb(var(--color-primary-light-navy) / <alpha-value>)',
        'secondary-navy': 'rgb(var(--color-secondary-navy) / <alpha-value>)',
        'secondary-light-navy':
          'rgb(var(--color-secondary-light-navy) / <alpha-value>)',
        'primary-light-grey':
          'rgb(var(--color-primary-light-grey) / <alpha-value>)',
        'secondary-light-grey':
          'rgb(var(--color-secondary-light-grey) / <alpha-value>)',
        'primary-icon-light':
          'rgb(var(--color-primary-icon-light) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
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
