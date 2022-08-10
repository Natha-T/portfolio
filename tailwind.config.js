/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./index.html",
    "./src/App.js",
   "./src/main.js",
   "./src/component/Navbar.js",
   "./src/component/Hero.js",
   "./src/component/Stacks.js",
   "./src/component/Portfolio.js",
   "./src/component/Contact.js",
   "./src/component/About.js",   
  ],
  theme: {
    extend: {
      colors: {
        'backc': '#082A3A',
        'texti': '#FFFFFF',
        'btnc': '#1F6CAB',
        'otherc': '#00E6F6',
      },

    },
  },
  plugins: [],
}
