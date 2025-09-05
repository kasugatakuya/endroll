/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'endroll-bg': '#000000',
        'endroll-text': '#f5f5dc',
        'endroll-gold': '#d4af37',
        'endroll-silver': '#c0c0c0',
        'endroll-dark-gold': '#b8860b',
        'endroll-fade': 'rgba(245, 245, 220, 0.8)',
        'endroll-glow': 'rgba(212, 175, 55, 0.3)',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}