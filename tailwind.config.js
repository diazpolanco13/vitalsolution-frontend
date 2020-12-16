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
      backgroundImage: {
        'producto': "url('https://res.cloudinary.com/apidev/image/upload/v1608142883/UI/bhxirputbuees411o4qf.jpg')"
      },
    },
  },
  variants: {
    extend: {
      transitionDelay: ['hover', 'focus'],
      gradientColorStops: ['active', 'group-hover'],
      textOpacity: ['dark'],
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
