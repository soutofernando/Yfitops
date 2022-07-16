/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    fontFamily: {
      "yfitops": "Roboto, sans-serif"
    },
    extend: {
      colors: {
        'pink-yfitops': '#ffd4db',
        'white-gray':"#efefef",
        'blue-ocean': "#2E77D0",
        'gray-ifitops': "#222326",
      },
      spacing: {
        104: "420px",
        112: "484px"
      },
      height:{
        "88": "368px",
        "120":"620px",
        "128":"660px"
      }
    },
  },
  plugins: [],
}
