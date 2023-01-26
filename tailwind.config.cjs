/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  colors: {
     tranparent: 'tranparent',
     mainLight:'#EAEAEA',
     mainDark:'#212121',
     gray: '#5E5E5E',
     purple:'#823AE0',
  },
    extend: {
      fontFamily: {
        display: ['Pally', 'Comic Sans MS', 'sans-serif'],
        body: ['Pally', 'Comic Sans MS', 'sans-serif'],
      },
  },
 
},
plugins: []
}

