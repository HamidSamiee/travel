/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1.5rem'
      },
      boxShadow: {
        "input-focus": "0 2px 4px rgba(2,15,29,0.904)",
        "input-header": "0 2px 4px rgba(2,15,29,0.242)", 
      },      
  },
  },
  plugins: [],
}

