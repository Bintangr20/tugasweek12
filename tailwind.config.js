// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
 purge: [],
 darkMode: false, // or 'media' or 'class'
 theme: {
    extend: {
      backgroundColor: {
        ...colors,
        'pink-600': '#e3342f',
        'pippin': {
            '50': '#fef2f2',
            '100': '#ffdfdf',
            '200': '#ffc8c8',
            '300': '#ffa2a2',
            '400': '#fd6c6c',
            '500': '#f53e3e',
            '600': '#e32020',
            '700': '#bf1616',
            '800': '#9d1717',
            '900': '#831a1a',
            '950': '#470808',
        },
        
      },
      textColor: {
        ...colors,
        'pink-600': '#e3342f',
      },
    },
 },
 variants: {},
 plugins: [],
}