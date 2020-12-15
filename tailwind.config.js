module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        './apps/**/*.html',
        './apps/**/*.ts',
        './libs/**/*.html',
        './libs/**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
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
});
