// console.log('TAILWIND PURGE:', process.env.ENVIRONMENT === 'production' || process.env.ENVIRONMENT === 'next');
module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.ENVIRONMENT === 'production' || process.env.ENVIRONMENT === 'next',
    content: [
      './libs/**/*.{html,scss,ts}'
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
          primary: process.env.ENVIRONMENT === 'next' ? "#8276F4" : "#5ABD8C",
          dark: "#9BB9B4",
        },
        pink: {
          light: "#F6E5E5",
        },
        blue: {
          primary: "#4267B2"
        }
      },
      spacing: {
        "27": "6.75rem",
        "54": "13.5rem"
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
