module.exports = {
  purge: {
    enable: "true",
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {
      fontFamily: ["Dancing Script", "cursive"],
    },
  },

    variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },

  plugins: [],
}