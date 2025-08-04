/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'elegant': ['Cormorant Garamond', 'serif'],
      },
      colors:{
        // Minimalist color palette
        primary: '#f8fafc', // Slate 50
        secondary: '#64748b', // Slate 500
        accent: '#f59e0b', // Amber 500
        dark: '#1e293b', // Slate 800
        light: '#f1f5f9', // Slate 100
        white: '#ffffff',
        black: '#0f172a', // Slate 900
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Legacy colors for compatibility
        nav:'#64748b',
        Tertiary: '#64748b',
        quad: '#f59e0b'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-very-slow': 'spin 5s linear infinite',
        'spin-ultra-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'spin-faster': 'spin 0.2s linear infinite',
        'mystical-spin': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}