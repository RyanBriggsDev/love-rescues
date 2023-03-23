module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
      colors: {},
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
