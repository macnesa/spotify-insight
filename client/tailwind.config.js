/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: {
          700: "#0f0f0f",
          800: "#0f0f0f",
          900: "#0f0f0f",
        },
        unfocus: {
          500: "#b3b3b3"
        }
      },
      fontFamily: {
        // 'poppins': ['"Poppins"', 'sans serif'],
        raleway: ['"Raleway"', "sans serif"],
        hebrew: ["Noto Sans Hebrew", "sans-serif"]
      },
    },

    fontFamily: {
      body: [
        // "Gotham",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        // "Inter",
        // "ui-sans-serif",
        // "system-ui",
        // "-apple-system",
        // "system-ui",
        "Gotham",
        "Segoe UI",
        // "Roboto",
        // "Helvetica Neue",
        // "Arial",
        // "Noto Sans",
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
    },
  },
  // darkMode:'class',
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      // addVariant('child-hover', '& > *:hover');
    },
    require("flowbite/plugin"),
    // require("daisyui"),
  ],
  daisyui: {
    // themes: ["light"],
  },
};



