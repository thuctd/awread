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
      fontSize: {
        small: ['0.6rem', '1rem']
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
