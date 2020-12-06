module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
      textOpacity: ['dark'],
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
