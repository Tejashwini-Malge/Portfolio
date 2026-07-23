import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },

      colors: {
        bg: {
          primary: "#d3b48a",
          secondary: "#c6a276",
          card: "#fdf8ee",
        },

        accent: {
          cyan: "#a8442a",
          violet: "#4f6d8f",
          pink: "#d9a441",
          emerald: "#5f7a4f",
        },

        text: {
          primary: "#2c1e12",
          secondary: "#4a3826",
          muted: "#6e5842",
        },
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "border-flow": "border-flow 4s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },

          "100%": {
            backgroundPosition: "200% 0",
          },
        },

        "gradient-x": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },

          "50%": {
            backgroundPosition: "100% 50%",
          },
        },

        "border-flow": {
          "0%": {
            backgroundPosition: "0% 50%",
          },

          "50%": {
            backgroundPosition: "100% 50%",
          },

          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },

      backgroundSize: {
        "300%": "300%",
      },
    },
  },

  plugins: [],
};

export default config;