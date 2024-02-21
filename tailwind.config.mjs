const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      colors: {
        primary: '#1c85e8',
        secondary: '#002245',
        light: '#cee7fd',
      },
      fontFamily: {
        sans: ['Raleway Variable', 'Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
