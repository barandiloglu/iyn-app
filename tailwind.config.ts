import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from branding guide
        primary: {
          DEFAULT: "#0349AA",
          light: "#0091FF",
          gradient: "linear-gradient(90deg, #0349AA 0%, #0091FF 100%)",
        },
        accent: {
          DEFAULT: "#ec8d13",
        },
        neutral: {
          light: "#F4F5FA",
          DEFAULT: "#2c2b2b",
        },
        background: "#eff1ef",
      },
      fontFamily: {
        // Typography from branding guide
        header: ["var(--font-oswald)", "Oswald", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        subheader: ["var(--font-oswald)", "Oswald", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        paragraph: ["Garet", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["Garet", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #0349AA 0%, #0091FF 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
