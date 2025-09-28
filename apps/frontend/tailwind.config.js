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
        cardWhite: '#F6F4EE',
        cardWhiteHover: '#eceae4',
        accentRed: '#5C2A2A',
        primary: '#6A7D53',
        primaryHover: '#576744',
        secondary: '#',
        browny: '#5C4432'
      },

      spacing: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px'
      },

      borderRadius: {
        6: '6px',
        8: '8px',
        12: '12px',
        15: '15px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px'
      },

      boxShadow: {
        xs: '2px 3px 6px 0 rgba(0,0,0,0.25)', // active
        sm: '3px 4px 8px 0 rgba(0,0,0,0.25)', // base
        md: '6px 8px 18px 0 rgba(0,0,0,0.30)', // hover
        lg: '12px 16px 36px 0 rgba(0,0,0,0.30)', // усиленная
        xl: '20px 24px 56px 0 rgba(0,0,0,0.35)' // максимальная
      },

      fontSize: {
        72: ['clamp(40px,calc(2.963vw+29.334px),72px)', { lineHeight: '1.06' }],
        64: ['clamp(36px,calc(2.593vw+26.667px),64px)', { lineHeight: '1.06' }],
        60: ['clamp(34px,calc(2.4vw+25.333px),60px)', { lineHeight: '1.12' }],
        56: ['clamp(32px,calc(2.222vw+24px),56px)', { lineHeight: '1.08' }],
        50: ['clamp(30px, calc(1.852vw+23.333px), 50px)', { lineHeight: '1.10' }],
        48: ['clamp(28px,calc(1.852vw+21.333px),48px)', { lineHeight: '1.10' }],
        40: ['clamp(26px,calc(1.296vw+21.333px),40px)', { lineHeight: '1.20' }],
        36: ['clamp(24px,calc(1.111vw+20px),36px)', { lineHeight: '1.22' }],
        32: ['clamp(22px,calc(0.926vw+18.667px),32px)', { lineHeight: '1.28' }],
        28: ['clamp(20px,calc(0.741vw+17.333px),28px)', { lineHeight: '1.30' }],
        24: ['clamp(19px,calc(0.463vw+17.333px),24px)', { lineHeight: '1.32' }],
        23: ['clamp(18px,calc(0.463vw+16.333px),23px)', { lineHeight: '1.35' }],
        22: ['clamp(17px,calc(0.463vw+15.333px),22px)', { lineHeight: '1.38' }],
        20: ['clamp(16px,calc(0.370vw+14.667px),20px)', { lineHeight: '1.42' }],
        18: ['clamp(15px,calc(0.278vw+14px),18px)', { lineHeight: '1.45' }],
        16: ['clamp(15px,calc(0.093vw+14.667px),16px)', { lineHeight: '1.48' }],
        14: ['clamp(13px,calc(0.093vw+12.667px),14px)', { lineHeight: '1.50' }]
      }
    },
    fontFamily: {
      sans: ['var(--font-cormorant)', 'serif'],
      serif: ['var(--font-cormorant)', 'serif'],
      inter: ['var(--font-inter)', 'sans-serif']
    }
  },
  safelist: [{ pattern: /^text-(14|16|18|20|22|23|24|28|32|36|40|48|56|60|64|72)$/ }],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-72': { fontSize: 'clamp(40px,calc(2.963vw + 29.334px),72px)', lineHeight: '1.06' },
        '.text-64': { fontSize: 'clamp(36px,calc(2.593vw + 26.667px),64px)', lineHeight: '1.06' },
        '.text-60': { fontSize: 'clamp(34px,calc(2.4vw + 25.333px),60px)', lineHeight: '1.12' },
        '.text-56': { fontSize: 'clamp(32px,calc(2.222vw + 24px),56px)', lineHeight: '1.08' },
        '.text-50': { fontSize: 'clamp(30px, calc(1.852vw + 23.333px), 50px)', lineHeight: '1.10' },
        '.text-48': { fontSize: 'clamp(28px,calc(1.852vw + 21.333px),48px)', lineHeight: '1.10' },
        '.text-40': { fontSize: 'clamp(26px,calc(1.296vw + 21.333px),40px)', lineHeight: '1.20' },
        '.text-36': { fontSize: 'clamp(24px,calc(1.111vw + 20px),36px)', lineHeight: '1.22' },
        '.text-32': { fontSize: 'clamp(22px,calc(0.926vw + 18.667px),32px)', lineHeight: '1.28' },
        '.text-28': { fontSize: 'clamp(20px,calc(0.741vw + 17.333px),28px)', lineHeight: '1.30' },
        '.text-24': { fontSize: 'clamp(19px,calc(0.463vw + 17.333px),24px)', lineHeight: '1.32' },
        '.text-23': { fontSize: 'clamp(18px,calc(0.463vw + 16.333px),23px)', lineHeight: '1.35' },
        '.text-22': { fontSize: 'clamp(17px,calc(0.463vw + 15.333px),22px)', lineHeight: '1.38' },
        '.text-20': { fontSize: 'clamp(16px,calc(0.370vw + 14.667px),20px)', lineHeight: '1.42' },
        '.text-18': { fontSize: 'clamp(15px,calc(0.278vw + 14px),18px)', lineHeight: '1.45' },
        '.text-16': { fontSize: 'clamp(15px,calc(0.093vw + 14.667px),16px)', lineHeight: '1.48' },
        '.text-14': { fontSize: 'clamp(13px,calc(0.093vw + 12.667px),14px)', lineHeight: '1.50' }
      })
    }
  ]
}
