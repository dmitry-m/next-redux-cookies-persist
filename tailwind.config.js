const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  // theme: {
  //   colors: {
  //     ...colors,
  //     primary: {
  //       light: colors.purple[300],
  //       dark: colors.purple[800],
  //       "bg-light": colors.purple[700],
  //       "bg-dark": colors.purple[600],
  //     },
  //     second: {
  //       light: colors.yellow[400],
  //       dark: colors.yellow[600],
  //       "bg-light": colors.yellow[600],
  //       "bg-dark": colors.yellow[400],
  //     },
  //     error: colors.red[600],
  //   },
  // },
  plugins: [
    require("daisyui"),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({}),
        addUtilities({
          ".text-shadow": {
            textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
          },
        });
    }),
  ],
  daisyui: {
    // themes: [
    //   {
    //     dark: {
    //       primary: "#793ef9",
    //     },
    //   },
    //   "light",
    // ],
  },
  darkMode: ["class", '[data-theme="dark"]'],
};
