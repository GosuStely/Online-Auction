/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          yellow: {
            DEFAULT: '#E8FF00',
            light: '#F2FF66',
            dark: '#C3D400',
          },
          blue: {
            DEFAULT: '#00F0FF',
            light: '#66FCFF',
            dark: '#00C4CC',
          },
          black: {
            DEFAULT: '#0B0B0B',
            light: '#1A1A1A',
            lighter: '#2E2E2E',
            darkest: '#000000',
          },
        },
      },
    },
  },
  plugins: [],
}