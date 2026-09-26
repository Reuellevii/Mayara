/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141312',
        charcoal: '#242220',
        bone: '#FAF7F2',
        parchment: '#F1ECE3',
        stone: '#8C8478',
        brass: '#AD8A55',
        'brass-light': '#C7A66D',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        wideish: '0.03em',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
