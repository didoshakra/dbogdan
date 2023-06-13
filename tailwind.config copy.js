// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpLeave: {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
        slideUpLeave: "slideUpLeave .3s ease-in-out",
      },
    },
  },
  plugins: [],
};
// components/PageWithTransition.tsx
// ...omitted for brevity
import cn from "classnames";
const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  // ...omitted for brevity
  return (
    <div
      className={cn({
        "animate-slideUpEnter": !transitioning,
      })}
    >
      <Screen {...pageProps} />
    </div>
  );
};
export default PageWithTransition;

