/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      colors: {
        live: {
          bg: '#070c18',
          bg2: '#0b1322',
          panel: '#0b1322',
          card: '#0e1a2e',
          border: '#1d2c48',
          muted: '#8a96ad',
          cyan: '#25f4ee',
          pink: '#fe2c55',
          purple: '#7c4dff',
          gold: '#ffcf5c',
          'gold-dark': '#ff9d2b',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(37, 244, 238, 0.35)',
        'glow-pink': '0 0 24px rgba(254, 44, 85, 0.35)',
        'glow-purple': '0 0 24px rgba(124, 77, 255, 0.35)',
        'glow-gold': '0 0 24px rgba(255, 207, 92, 0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
