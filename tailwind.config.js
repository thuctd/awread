module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './libs/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          greenish: "#4B4B4B",
        }
      }
    },
    color: {
      gray: {
        "light": "#C4C4C4",
        "dark": "#7D7D7D"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
