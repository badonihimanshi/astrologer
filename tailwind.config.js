/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        primary:'rgb(255, 244, 237)',
        nav:'#bbb',
        secondary: '#E0B252',
        Tertiary: '#777777',
        quad: '#FC6F10'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-very-slow': 'spin 5s linear infinite',
        'spin-ultra-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'spin-faster': 'spin 0.2s linear infinite',
        'mystical-spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}