/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './**/*.{js,ts,jsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius:{
        borderRadius: "36px",
      },
      colors: {
        headMenuText: "#82AE46",
        // mainColor: "#050C2A",
        mainColor: "red",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "opacity(1)",
          },
          "45%": {
            transform: "opacity(1)",
          },
          "55%": {
            transform: "opacity(0)",
          },
          "100%": {
            transform: "opacity(1)",
          },
        },
      },
    },
  },
  //   screens: 'sm': '640px','md': '768px','lg': '1024px','xl': '1280px',2xl': '1536px',
  plugins: [],
}
