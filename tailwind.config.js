/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'secondary-btn': '#0860C6',
        'toggle-checked' : '#0425BF',
        'primary-txt' : '#323232',
        'secondary-txt' : '#323232',
        'shade' : '#ECB11D',
        'background-yellow' : '#F2B620',
        'background-lgtyellow' : '#F0BB39',
        'shadow-shade' : '#0000004b',
        'dark-btn' : '#40454f',
      }
    },
  },
  plugins: [],
}

