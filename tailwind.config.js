/** @type { import('tailwindcss').Config } */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'stars': {
          '0%, 100%': {
            opacity: 0,
          },
          '5%': {
            opacity: 0.8,
          },
          '80%': {
            opacity: 0.8,
          },
          '100%': {
            transform: 'translateY(300px)',
            opacity: 0,
          },
        },
      },
      animation: {
        'stars': 'stars 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
