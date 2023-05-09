/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: {
      'main': '#006CA8',
      'main-2': '#0F172A',
      'normal': '#283847',
    },
    backgroundColor: {
      'main': '#006CA8',
      'main-2': '#FFCD42',
      'main-3': "#38BDF8"
    },
    boxShadow: {
      'main': '0 4px 24px rgba(0, 0, 0, 0.08)',
      'main-2': '0 2px 4px rgba(0, 0, 0, 0.08)'
    },
    colors: {
      transparent: 'transparent',
    }
  },
  plugins: [],
}
