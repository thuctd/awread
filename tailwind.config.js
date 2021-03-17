const colors = require('tailwindcss/colors')
module.exports = {
  prefix: '',
  purge: {
    enabled: true,
    content: [
      './libs/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colors,
        green: {
          dark: '#5ABD8C',
        }
      }
    },
    color: {
      gray: {
        "light": "#C4C4C4",
        "dark": "#7D7D7D"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
