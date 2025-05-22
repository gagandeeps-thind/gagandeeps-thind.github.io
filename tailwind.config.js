/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'float': 'float 3s ease-in-out infinite', // updated duration and easing
        'distort': 'distort 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }, // updated value
          '100%': { transform: 'translateY(0px)' },
        },
        distort: {
          '0%, 100%': { transform: 'skew(0deg, 0deg)' },
          '50%': { transform: 'skew(-2deg, 2deg)' },
        }
      }
    },
  },
  plugins: [],
}
