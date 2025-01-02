/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ['responsive'], // Ensure responsive variants for `display` are enabled
    },
    screens : {
      "sm" : { "max" : "700px"},
      "md" : {"min" : "701px", "max" : "1000px"},
      "lg" : {"min" : "1001px" , "max" : "1279px"},
      "xl" : {"min" : "1280px"}
    }
  },

  plugins: [],
}

