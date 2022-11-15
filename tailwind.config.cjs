/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c69ef',
        hover: '#efebfe',
        light: {
          //background: bg-slate-100,
        },
        dark: {
          background: '#292b2f',
          widget: '#36393f',
        },
      },
    },
  },
  plugins: [],
};
