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
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
