/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        'custom2': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        'custom3': '10px 10px 5px 0px rgba(242,239,242,1)',
        'custom-light': '10px 10px 5px 0px rgba(242,239,242,1)',
        'custom-dark': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        'glow': '0 0 20px 5px rgba(156, 39, 176, 0.7)',
            'white-glow2': '0 0 20px 5px rgba(255, 255, 255, 0.7)',
            'purple-glow': '0 0 20px 5px rgba(89, 24, 223, 0.7)',
            'white-glow': '0 0 10px rgba(255, 255, 255, 0.5)'
      },
      colors:{
        customPurple:"#5918df"
      }
    },
  },
  plugins: [],
}

