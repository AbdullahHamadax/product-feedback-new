import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        "white-1": "var(--white-1)",
        "suggestions-bar": "var(--suggestions-bar)",
        "feedback-title": "var(--feedback-title)",
        "feedback-tag": "var(--feedback-tag)",
        "feedback-paragraph": "var(--feedback-paragraph)",
        "white-2": "var(--white-2)",
        "feedback-tag-card": "var(--feedback-tag-card)",
        "feedback-tag-card-hover": "var(--feedback-tag-card-hover)",
        "add-feedback-button": "var(--add-feedback-button)",
        "add-feedback-button-hover": "var(--add-feedback-button-hover)",
        "delete-feedback-button": "var(--delete-feedback-button)",
        "delete-feedback-button-hover": "var(--delete-feedback-button-hover)",
        "edit-feedback-button-hover": "var(--edit-feedback-button-hover)",
        "header-faded": "var(--header-faded)",
        "list-orange": "var(--list-orange)",
        "list-cyan": "var(--list-cyan)",
        "roadmap-items-not-checked": "var(--roadmap-items-not-checked)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
