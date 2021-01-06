module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'comet': '#545C74',
        'shuttle-gray': '#545C6C',
      },
      maxWidth: {
        'xxs' : '15rem',
        '1400' : '87.5rem'
      },

    },
  },
  variants: {
    extend: {
      outline: ["hover"],
      // ring : ["hover"]
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container' : {
          maxWidth : '100%',
          
        }
      })
    }
  ],
}
