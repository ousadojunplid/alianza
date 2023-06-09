/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'min830': '830px',
        'min400': '400px',
        '3xl': '2000px'
      }
    },
    textColor: {
      'main': '#006CA8',
      'main-2': '#0F172A',
      'main-3': '#FFCD42',
      'normal': '#283847',
      'normal-2': '#334155',
      'normal-b': "#0284C7",
      'w': "#fff",
      'event-news': '#2C2543'
    },
    stroke: {
      'w': "#fff",
      'main': '#006CA8',
    },
    fill: {
      'w': "#fff",
      'main': '#FFCD42',
    },
    backgroundColor: {
      'w': "#fff",
      'main': '#006CA8',
      'main-2': '#FFCD42',
      'main-3': "#38BDF8",
      'main-2-hover': "#FFDA73",
      'link-hover': '#F8F8F8',
      'grey-light': '#F3F4F6',
      'grey-super-light': '#FCFCFD',
      'main-hover': '#009CEC',
      "main-strong": "#0C4A6E",
      'main-body': '#0F172A',
    },
    borderColor: {
      "main": "#0C4A6E",
      'main-3': "#38BDF8",
      'grey': '#A1A1A1',
    },
    boxShadow: {
      'main': '0 4px 24px rgba(0, 0, 0, 0.08)',
      'main-2': '0 2px 4px rgba(0, 0, 0, 0.08)',
      'main-3': '0 5px 4px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      transparent: 'transparent',
    }
  },
  plugins: [],
}
