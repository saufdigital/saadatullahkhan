/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins : "'Poppins' , sans-serif"
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        "typing": "typing 2s steps(10)", 
        "appear" : "fade-up once ease-linear",
        "tilt" : "tilt 2s infinite"
      },
      keyframes:{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "typing": {
          "0%": {
            "font-weight": "light"
          },
          "100%": {
            "font-weight": "bold"
          }
        },
        "tilt": {
          "0%": {
            "transform": "rotate(0deg)"
          },
          "25%": {
            "transform": "rotate(5deg)"
          },
          "50%": {
            "transform": "rotate(10deg)"
          },
          "75%": {
            "transform": "rotate(-5deg)"
          },
          "100%": {
            "transform": "rotate(-10deg)"
          }
        },
      }
      ,
      colors:{"sauforange" : "#F36C25"}
    },
    
    screens :{
      "mobile" : '320px',
      "tablet" : '640px',
      "laptop" : '1024px'
    },
  

  },
  plugins: [],
}

