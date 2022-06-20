module.exports = {
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
        '2': 'repeat(2, minmax(0, 100px 300px))',

        // Complex site-specific column configuration
        //'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
