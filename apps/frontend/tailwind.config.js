/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        btnActive: '#CCBD87',
        headerDefault: 'rgba(133, 135, 62, 0.8)',
        darkRed: '#5C2A2A',
        softPink: '#937878',
        secondary: '#6A7D53',
        primary: '#5C4432',
        background: '#DCD6C9'
      }
    }
  },
  plugins: []
}
