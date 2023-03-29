/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [

    // plugin(function({ addComponents }) {
    //   const buttons = {
    //     '.btn': {
    //       padding: '.5rem 1rem !important',
    //       borderRadius: '.25rem !important',
    //       fontWeight: '600 !important',
    //       background: 'red'
    //     },
    //   }

    //   addComponents(buttons)
    // })

  ]


}