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
      backgroundImage: {
        'hero-support': "url('/app/static/heroSupport/search-desktop.png')",
      },
      colors: {
        'pink-yfitops': '#ffd4db',
        'white-gray': "#efefef",
        'blue-ocean': "#2E77D0",
        'gray-ifitops': "#222326",
        'gray-white': "#9D9D9D",
        'gray-black': "#0d0d0d",
        'gray-blackgray': "#1A1A1A",
        'black-gray': "#181818",
        'black-gray-hover': "#1e1e1e"
      },

      width: {
        "162": "924px",
        "150": "842px",
        "148":"820px",
        "132":"698px",
        "128": "660px",
        "124": "648px",
        "120": "620px",
        "118": "598px",
        "116": "536px",
        "88": "348px"
      },

      spacing: {
        104: "420px",
        112: "484px"
      },

      height: {
        "88": "368px",
        "120": "620px",
        "128": "660px"
      }
    },
  },
  plugins: [

  ],
}
