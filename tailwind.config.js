/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'secondary-btn': '#0860C6',
        // 'toggle-checked' : '#1990ff',
        // 'primary-txt' : '#323232',
        // 'secondary-txt' : '#0860c6',
        // 'warning-txt' : '#ff8000',
        // 'shade' : '#6ac9ff',
        // 'background-sky' : '#eff4fe',
        // 'background-blue' : '#26b9f1',
        // 'background-yellow' : '#EAAA00',
        // 'shadow-shade' : '#0000004b',
        // 'dark-btn' : '#40454f',

        'secondary-btn': '#0860C6',
        'toggle-checked' : '#ECB11D',
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

