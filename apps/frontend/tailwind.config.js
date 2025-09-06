/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        headerBg: '#96975A',
        headerBtnActive: '#b5a872',
        headerBtnHover: 'rgba(133, 135, 62, 0.9)',
        background: '#DCD6C9',
        backgroundHover: '#c9c3b7',
        primaryRed: '#5C2A2A',
        browny: '#5C4432'
      }
    },
    fontFamily: {
      cormorant: ['var(--font-cormorant)', 'serif'],
      inter: ['var(--font-inter)', 'sans-serif']
    }
  },
  plugins: []
}
