/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: { sans: ['"HEX Franklin"', ...defaultTheme.fontFamily.sans] },
      fontStretch: {
        "ultra-condensed": "50%",
        "extra-condensed": "62.5%",
        condensed: "75%",
        "semi-condensed": "87.5%",
        normal: "100%",
        "semi-expanded": "112.5%",
        expanded: "125%",
        "extra-expanded": "150%",
        "ultra-expanded": "200%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities, theme }) {
      const fontStretchUtilities = Object.entries(theme("fontStretch")).map(
        ([key, value]) => ({
          [`.font-stretch-${key}`]: { fontStretch: value },
        }),
      );

      addUtilities(fontStretchUtilities);
    }),
  ],
};
