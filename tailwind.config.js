module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
