/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['exo', 'sans'],
        exoSemibold: ['exoSemibold', 'sans'],
        exoBold: ['exoBold', 'sans'],
      },
      colors: {
        bgPurple: '#5667FD',
        bgLightGray: '#EDEDED',
        bgWhite: '#F4F5F9',
        lightGrayText: '#636D77',
        darkGrayText: '#364356',
      },
    },
  },
  plugins: [],
};
