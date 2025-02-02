/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          departure: 'var(--font-departure)',
          neuemontreal: 'var(--font-neuemontreal)',
          roobert: 'var(--font-roobert)',
      },
      },
    },
    plugins: [],
  }