module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lime: {
        100: "#f1fbe9",
        200: "#d9f4c2",
        300: "#c3eea0",
        400: "#abe779",
        500: "#92e052",
        600: "#7ad92b",
        700: "#66ba21",
        800: "#51931a",
        900: "#3c6c13"
      },
    },
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
