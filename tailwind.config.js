module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': {
          250: '#E4E6EC'
        },
        // red: {
        //   600: '#E56E80',
        //   50: '#A067BB',

        // },
        // blue: {
        //   100: '#7B61DC',
        //   150: '#60ABE2',
        //   200: '#578BDF',
        // },
        // lightblue: {
        //   100: '#65B5D8'
        // }
      }
    },

    container: {
      center: true,
      padding: {
        default: '1rem',
      },
      screens: {
        xl: '1120px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
