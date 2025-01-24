/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm" : {max : "700px"},
        'md': {min : "701px", max : "900px"},      
        'lg': {min : "901px"},  
      },

      backgroundImage: {
        'custom-gradient': `radial-gradient(farthest-side, #010101 94%, #0000) top/14.1px 14.1px no-repeat,
                           conic-gradient(#0000 30%, #010101)`,
      },
      maskImage: {
        'custom-mask': `radial-gradient(farthest-side, #0000 calc(100% - 14.1px), #000 0)`,
      },
      webkitMaskImage: {
        'custom-mask': `radial-gradient(farthest-side, #0000 calc(100% - 14.1px), #000 0)`,
      },

      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0turn)' },
          '100%': { transform: 'rotate(1turn)' },
        },
      },
      animation: {
        loading: 'loading 1.4s linear infinite', // Adjust duration and timing as needed
      },

    },
  },
  plugins: [],
}