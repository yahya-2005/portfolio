/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
        cyan: {
          50: '#ecf8ff',
          100: '#cff0ff',
          200: '#a4e7ff',
          300: '#6fd5ff',
          400: '#36baff',
          500: '#0b9dff',
          600: '#0277d7',
          700: '#025cad',
          800: '#06438e',
          900: '#0a3e74',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 49%': { borderColor: 'transparent' },
          '50%, 100%': { borderColor: 'white' },
        },
      },
      boxShadow: {
        glow: '0 0 20px 0 rgba(16, 185, 129, 0.3)',
        'glow-lg': '0 0 40px 0 rgba(16, 185, 129, 0.4)',
        'glow-cyan': '0 0 20px 0 rgba(11, 157, 255, 0.3)',
        'glow-cyan-lg': '0 0 40px 0 rgba(11, 157, 255, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
