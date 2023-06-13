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
      borderRadius: {
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
      //Затримка анімації: delay-5000
      transitionDelay: {
        5000: "5000ms",
      },
      //Анімація
      keyframes: {
        slideHome: {
          "0%": {
            opacity: 100,
            // transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            // transform: "translateY(20px)",
          },
        },
        slideHome1: {
          "0%": {
            opacity: 100,
            // transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            // transform: "translateY(20px)",
          },
        },
      },
      //   animation-name: slideHome; //ім'я секції анімації
      //   animation-duration: 5s; //протяжність анімації
      //   animation-delay: 5s; //Затримка анімації після протяжність анімації
      //   animation-timing-function: linear; //рівномірна зміна
      //   animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
      //   animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
      animation: {
        slideHome: "slideHome 5s ease-in-out infinite alternate",
        slideHome1: "slideHome1 5s 5s ease-in-out  infinite alternate",
      },
    },
  },
  //   screens: 'sm': '640px','md': '768px','lg': '1024px','xl': '1280px',2xl': '1536px',
  plugins: [],
}
