module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'Azeret Mono', 'sans-serif'],
      azeret: ['Azeret Mono', 'Noto Sans TC', 'sans-serif']
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}