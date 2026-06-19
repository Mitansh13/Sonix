import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sonix-navy": "#0A1128",
        "sonix-card": "#141E3B",
        "sonix-cyan": "#00D4FF",
        "sonix-green": "#00FF87",
        "sonix-dark": "#0f172a",
      },
      backgroundImage: {
        "sonix-gradient": "linear-gradient(to right, #0A1128, #00D4FF, #00FF87)",
        "sonix-gradient-light": "linear-gradient(135deg, #00D4FF, #00FF87)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
