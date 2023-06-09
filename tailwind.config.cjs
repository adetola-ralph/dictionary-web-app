/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.{js,ts,jsx,tsx,html}",
    "./**/*",
  ],
  theme: {
    extend: {
      colors: {
        veronica: '#A445ED',
        'coral-red': '#FF5252',
        'pale-lavendar': '#edcffe',
        dgray: {
          100: '#f4f4f4',
          200: '#e9e9e9',
          300: '#757575',
          400: '#3a3a3a',
          500: '#2d2d2d',
          600: '#1f1f1f',
          700: '#050505',
        },
      }
    },
    fontFamily: {
      sans: ['Inter'],
      serif: ['Lora'],
      mono: ['Inconsolata'],
    },
    fontSize: {
      sm: ['14px', '17px'],
      base: ['18px', '24px'],
      lg: ['20px', '24px'],
      xl: ['24px', '29px'],
      '2xl': ['32px', '39px'],
      '3xl': ['64px', '77px'],
    },
    boxShadow: {
      dshadow: '0 5px 30px 0px rgba(0, 0, 0, 0.1)',
      'dshadow-dark': '0 5px 30px 0px rgba(164, 69, 237, 1)'
    }
  },
  plugins: [],
};
