/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes:false,
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

