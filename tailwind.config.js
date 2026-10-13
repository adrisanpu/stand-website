import {
  BRAND_DARK,
  BRAND_ORANGE,
  BRAND_ORANGE_DARK,
  BRAND_ORANGE_LIGHT,
} from './src/constants/brandColors.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: BRAND_DARK,
          orange: BRAND_ORANGE,
          'orange-dark': BRAND_ORANGE_DARK,
          'orange-light': BRAND_ORANGE_LIGHT,
          paper: '#faf8f4',
          ink: BRAND_DARK,
          muted: '#57534e',
          line: '#dedbd5',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        control: '8px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
}
