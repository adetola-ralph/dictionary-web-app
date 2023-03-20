/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
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
      '2xl': ['64px', '77px'],
    }
  },
  plugins: [],
}
