/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        600: "#CC4701",
        500: "#FF5A00",
      },

      turquoise: {
        800: "#092020",
        700: "#144848",
        600: "#19615E",
        500: "#207875",
        400: "#32B9B5",
        200: "#56D2CE",
      },

      beige: {
        50: "#FEFBF6",
      },

      greyscale: {
        900: "#000000",
        800: "#4A4A4A",
        700: "#707070",
        600: "#969696",
        500: "#BBBABB",
        400: "#C9C9C9",
        300: "#D7D6D6",
        200: "#E3E2E3",
        100: "#EEEFEE",
        50: "#FFFFFF",
      },
      white: "#ffffff",
      black: "#000000",
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "144px",
      "6xl": "176px",
      "7xl": "192px",
      "8xl": "288px",
      "9xl": "360px",
      "10xl": "424px",
      "11xl": "732px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      // sans: ["Prompt", "sans-serif"],
      // display: ["Courier", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativ: ["0.699rem", { lineHeight: "1.0rem" }],
      body: ["0.813rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      small: ["1.5rem", { lineHeight: "2.25rem" }],
      medium: ["2rem", { lineHeight: "3rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      xlarge: ["3rem", { lineHeight: "4.5rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      none: "0px",
      xs: "1px",
      s: "2px",
      m: "3px",
      lg: "4px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "0.25rem",
      none: "0px",
      xs: "10px",
      sm: "20px",
      md: "30px",
      lg: "40px",
      full: "180px",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
      inner25: "0px 4px 4px 0 rgb(0 0 0 / 0.25) inset",
      inner50: "0px 4px 4px 0 rgb(0 0 0 / 0.50) inset",
    },

    extend: {
      cursor: {
        slide: "url(/slide-cursor.svg) 25 25, pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
