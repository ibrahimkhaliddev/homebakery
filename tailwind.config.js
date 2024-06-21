/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-thai': ['Noto Sans Thai', 'sans'],
        'avenir': ['Avenir', 'sans'],
        'caveat': ['Caveat', 'cursivevenir'],
      },
      fontWeight: {
        'avenir-light': 300,
        'avenir-regular': 400,
        'avenir-medium': 500,
        'avenir-bold': 700,
      },
      fontStyle: {
        'avenir-normal': 'normal',
        'avenir-italic': 'italic',
      },
    },
  },
  plugins: [],
}
