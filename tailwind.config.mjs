/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0FAFA',
          100: '#D6F2F2',
          200: '#A8E0E0',
          300: '#6DC7C7',
          400: '#3AADAD',
          500: '#0D7377',
          600: '#0A5F62',
          700: '#084B4E',
          800: '#063839',
          900: '#042525',
        },
        coral: {
          50: '#FEF3F0',
          100: '#FDE0D9',
          200: '#F9BFB0',
          300: '#F29A84',
          400: '#E8725A',
          500: '#D4553D',
          600: '#B8412E',
          700: '#933424',
          800: '#6E271B',
          900: '#4A1A12',
        },
        warm: {
          50: '#FDFCFA',
          100: '#F7F5F0',
          200: '#EDE9E0',
          300: '#DED8CC',
          400: '#C5BDA9',
          500: '#A69D88',
        },
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', '"Noto Sans JP"', 'sans-serif'],
        display: ['"Zen Maru Gothic"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(13, 115, 119, 0.08), 0 4px 6px -4px rgba(13, 115, 119, 0.05)',
        'card': '0 1px 3px rgba(13, 115, 119, 0.06), 0 6px 16px rgba(13, 115, 119, 0.04)',
        'float': '0 8px 30px rgba(13, 115, 119, 0.12), 0 2px 8px rgba(13, 115, 119, 0.06)',
        'record': '0 0 0 0 rgba(232, 114, 90, 0.4)',
      },
      animation: {
        'pulse-record': 'pulse-record 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 0.4s ease-out',
        'wave-1': 'wave 1.2s ease-in-out infinite',
        'wave-2': 'wave 1.2s ease-in-out 0.1s infinite',
        'wave-3': 'wave 1.2s ease-in-out 0.2s infinite',
        'wave-4': 'wave 1.2s ease-in-out 0.3s infinite',
        'wave-5': 'wave 1.2s ease-in-out 0.4s infinite',
      },
      keyframes: {
        'pulse-record': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 114, 90, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(232, 114, 90, 0)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.2' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'wave': {
          '0%, 100%': { height: '8px' },
          '50%': { height: '28px' },
        },
      },
    },
  },
  plugins: [],
};
