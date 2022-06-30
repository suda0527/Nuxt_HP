module.exports = {
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  purge: {
    content: [],
    options: {
      safelist: [
        /^lg*/,
        /^md*/,
        /^sm*/,
        /^xs*/,
        /^xl*/,
        /^bg*/,
        /^p*-/,
        /^m*-/,
        /^w*-/,
        /^h*-/,
        /^border-*/,
        /^hover:*/,
        /^text*/,
        /^hover:text-/,
        /^flex*/,
        /^justify*/,
        /^rounded*/,
        /^list*/,
        /^table*/,
        /^center*/,
      ], // <= ここの部分
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 12px 15px 0px rgba(0, 0, 0, 0.24), 0 17px 50px 0px rgba(0, 0, 0, 0.19)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    extend: {
      backgroundImage: (theme) => ({
        indexbg: "url('@/assets/images/top-title.png')",
      }),
      fontFamily: {
        zen: ["Zen Kurenaido"],
        noto: ["Noto Sans JP"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(2, minmax(0, 100px 300px))',

        // Complex site-specific column configuration
        //'footer': '200px minmax(900px, 1fr) 100px',
      },
      height: {
               sm: '8px',
               md: '16px',
               lg: '24px',
               xl: '500px',
              }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
