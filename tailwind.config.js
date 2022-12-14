module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["Fjalla One"],
        body: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        imgBanner: "url('/public/assets/images/imgHero.svg')",
      },
    },
    plugins: [],
  },
};
