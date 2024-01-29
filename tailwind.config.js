// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        t9wissa: {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(-60%)" },

          "61%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "63%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "65%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "67%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "69%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "71%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "73%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "75%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "77%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "79%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "81%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "83%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "85%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "87%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "89%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "91%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "93%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "95%": {
            transform: "translateX(-60%) translateY(-30%) rotate(-10deg)",
          },
          "97%": {
            transform: "translateX(-60%) translateY(-30%) rotate(10deg)",
          },
          "98%": {
            transform: "translateX(-60%) translateY(-30%) rotate(0)",
          },
          "100%": { transform: "translateX(-60%) translateY(-30%) rotate(0)" },
        },
      },
      animation: {
        t9wissa: "t9wissa 5.5s infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
