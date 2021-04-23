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
      },
      colors: {
        gray: {
          text: "#4B4B4B",
          line: "#707070",
          icon: "#A3A3A3",
          primary: "#F2F2F2",
          light: "#BFBFBF",
        },
        green: {
          primary: "#5ABD8C",
          dark: "#9BB9B4",
        },
        pink: {
          light: "#F6E5E5",
        },
        blue: {
          primary: "#4267B2"
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
