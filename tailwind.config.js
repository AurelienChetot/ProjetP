import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/assets/lotus.gif')",
      },
      colors: {
        customColor: "#C1B09E",
        colorBrown: "#746458",
      },
      fontFamily: {
        royal: ["RoyalWedding-Regular", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
