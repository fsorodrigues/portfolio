const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: {
        light: colors.violet,
        dark: colors.yellow
      },
      gray: colors.gray,
    },
    fontFamily: {
      mono: ['Cousine', 'ui-monospace'],
    },
    dropShadow: {
      'dark': '0 0 5px #eab308',
      'light': '0 0 5px #8b5cf6',
    }
  },
  plugins: [],
  darkMode: "selector"
};
