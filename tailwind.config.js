/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dark-background": "#0f161e"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

