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
        btnActive: '#CCBD87',
        btnActiveHover: '#b5a872',
        headerDefault: 'rgba(133, 135, 62, 0.8)',
        headerDefaultHover: 'rgba(133, 135, 62, 0.9)',
        darkRed: '#5C2A2A',
        darkRedHover: '#4a2121',
        softPink: '#937878',
        softPinkHover: '#7d6464',
        secondary: '#6A7D53',
        secondaryHover: '#5a6b45',
        primary: '#5C4432',
        primaryHover: '#4d382a',
        background: '#DCD6C9',
        backgroundHover: '#c9c3b7'
      }
    },
    fontFamily: {
      cormorant: ['var(--font-cormorant)', 'serif'],
      inter: ['var(--font-inter)', 'sans-serif']
    }
  },
  plugins: []
}
