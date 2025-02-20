/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const addCustomUtilities = ({ addComponents }: any) => {
  addComponents({
    ".text-gradient-light": {
      backgroundImage: "linear-gradient(120deg, #1ba1e3, #9168c0, #d96570)",
      "-webkit-background-clip": "text",
      "background-clip": "text",
      color: "transparent",
    },
  });
};

const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#FFC107",
        accentDark: "#FFD54F",
        tags: "#ffe495",
        tagsDark: "#ccc3aa",
        primary: "#3c5a54",
        secondary: "#1abc9c",
        ternary: "#0e6251",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors, addCustomUtilities],
};

export default config;
