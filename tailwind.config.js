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
        roboto: ['roboto', 'sans'],
        robotoBold: ['robotoBold', 'sans'],
      },
      colors: {
        bgPurple: '#5667FD',
        bgLightGray: '#EDEDED',
        bgLightGray2: '#E6E6E6',
        bgWhite: '#F4F5F9',
        lightGrayText: '#636D77',
        darkGrayText: '#364356',
        gold: '#FED430',
      },
    },
  },
  plugins: [],
};
