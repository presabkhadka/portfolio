module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
          primary: "#1366D9",
          secondary: "#EB0A19",
        },
        coolgray: {
          100: "#F5F5F5",
          200: "#EBEBEB",
          300: "#E0E0E0",
          400: "#CCCCCC",
          500: "#8F8F8F",
          600: "#7A7A7A",
          700: "#525252",
          800: "#292929",
        },
        blue: {
          100: "#EBF3FF",
          200: "#D6E7FF",
          300: "#C2DAFF",
          400: "#99C2FF",
          500: "#70A9FF",
          600: "#2159AB",
          700: "#1B4789",
          800: "#143566",
        },
        green: {
          100: "#D0F6CA",
          200: "#54E03E",
          300: "#3AD322",
          400: "#30AF1D",
          500: "#1D6911",
        },
        yellow: {
          100: "#FEFCE8",
          200: "#FEF9C3",
          300: "#FEF08A",
          400: "#FDE047",
          500: "#FACC15",
          600: "#EAB308",
          700: "#CA8A04",
          800: "#A16207",
          900: "#854D0E",
        },
        red: {
          100: "#FFF6F7",
          200: "#FDC4C8",
          300: "#F62735",
          400: "#EB0A19",
        },

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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
