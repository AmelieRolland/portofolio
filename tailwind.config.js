/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  extend: {
    keyframes: {
      slide: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(10px)' },
      },
    },
    animation: {
      slide: 'slide 2s ease-in-out infinite',
    },
  },
}


