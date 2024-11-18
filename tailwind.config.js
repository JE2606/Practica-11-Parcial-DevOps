/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: 'hsl(14, 86%, 42%)',
        primaryGreen: 'hsl(159, 69%, 38%)',
        bgRose: 'hsl(20, 50%, 98%)',
        rose: {
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
      },
      fontFamily: {
        primaryRegular:['Regular', 'sans-serif'],
        primarySemiBold: ['SemiBold', 'sans-serif'],
        primaryBold: ['Bold', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

