import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",   // set per client in globals.css
          accent:  "var(--color-accent)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
