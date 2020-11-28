module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
      textOpacity: ['dark']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
