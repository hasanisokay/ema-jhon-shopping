/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [ 
      {
        mytheme: {

          "primary": "#d104cd",

          "secondary": "#e02a85",

          "accent": "#64078c",

          "neutral": "#15141F",

          "base-100": "#2E424D",

          "info": "#1C2B35",
          
          "offwhite":"#2A414F",

          "success": "#7BEADB",

          "warning": "#F79F3B",

          "error": "#FB1855",
        },
      },
    ],
    base:false

  },


  plugins: [require("daisyui")],
}

