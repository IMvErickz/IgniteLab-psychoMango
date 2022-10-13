/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,

      lg: 20,
      xl: 24,
      '2xl': 32
    },
    
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'white': '#fff',
      amarelo: {
        Mango: '#FFD222',
      },

      'amarelo-Mango': '#FFD222',
      'deskBackground': '#202024',
      'amareloHover': '#E4D69B',

      gray: {
        input : '#35353A',
      },
      
      'grayInput': '#35353A',
      'grayLabel': '#7C7C84',
      'labelHead': '#E2E8F0',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
