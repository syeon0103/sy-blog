/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
     "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DBE4C9',
        secondary: '#B3CCB0',
        grey: {
          100: "#0E0C0C",
          90: "#1C1817",
          80: "#342F2D",
          70: "#4C4543",
          60: "#615956",
          50: "#7F7471",
          40: "#9F9693",
          30: "#C7BFBD",
          20: "#E1DCDB",
          10: "#EFECEC",
          0: "#FAF9F9",
        },
      },
    },
  },
  plugins: [],
}

