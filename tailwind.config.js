/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./MASAI MEGA PROJECT/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'will-change-opacity': '0 0 0 0 rgba(0, 0, 0, 0)',
        'will-change-transform': '0 0 0 0 transparent',
      },
    },
  },
  plugins: [],
}

