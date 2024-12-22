/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",

    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors: {
        primary: "#f4f6f8",
        // AD49E1
        accent: {
          DEFAULT: "#3B9EBF",
          hover: "#3B9EBF",
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Enable DaisyUI's built-in light and dark themes
  },
}