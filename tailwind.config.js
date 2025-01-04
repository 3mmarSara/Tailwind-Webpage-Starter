/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
        './node_modules/preline/dist/*.js',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
      extend: {
        colors:{
            primary: '#7E3AF2',
            heading: '#111928',
            text: '#6B7280',
            btntext: '#FFFFFF',
            background: '#F9FAFB',
        },
        padding:{
            "custom": ''
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
        screens:{   
            'xs': '400px',
            'desktop': '2000px',
        }
      },
    },
    plugins: [
        require('preline/plugin'),
        require('flowbite/plugin'),
    ],
  }