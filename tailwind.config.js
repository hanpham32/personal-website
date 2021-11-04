module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      darkGrey: {
        DEFAULT: '#1F2022',
      },
      lightGrey: {
        DEFAULT: '#9A9A9A',
      },
      lightGrey1: {
        DEFAULT: "#8b8c8d",
      },
      lightGrey2: {
        DEFAULT: '#4e4e4e',
      },
      white: {
        DEFAULT: 'white',
      },
      milkyWhite: {
        DEFAULT: '#EEEEEE',
      },
      demoBtn: {
        DEFAULT: '#f49d11',
      },
      urlLink: {
        DEFAULT: '#337ab7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
