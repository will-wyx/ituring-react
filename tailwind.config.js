module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '14': '3.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
