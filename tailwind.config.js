/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a2e', // Deep navy
          light: '#2d2d44',
        },
        secondary: {
          DEFAULT: '#16c79a', // Emerald
          light: '#45e6c3',
        },
        accent: {
          DEFAULT: '#7b68ee', // Soft violet
          light: '#9d8ef7',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 