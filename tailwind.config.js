/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#E6EBF2",
          light: "#F4F7FB",
          dark: "#D6DDE8",
        },
        ink: {
          DEFAULT: "#232742",
          soft: "#565B7A",
          faint: "#8A90AC",
        },
        brand: {
          50: "#EAF2FF",
          100: "#D6E6FF",
          200: "#B0CEFF",
          300: "#85B2F5",
          400: "#4F8FD9",
          500: "#0A4291",
          600: "#083878",
          700: "#062F63",
          800: "#05264F",
          900: "#031B3A",
        },
        teal: {
          50: "#E6FBF7",
          100: "#C1F4E9",
          400: "#2FC3AC",
          500: "#17A398",
          600: "#0F8377",
        },
        danger: {
          500: "#D7263D",
          600: "#B71C31",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        "neu-flat": "9px 9px 18px #c3cad6, -9px -9px 18px #ffffff",
        "neu-flat-lg": "14px 14px 28px #c3cad6, -14px -14px 28px #ffffff",
        "neu-flat-sm": "5px 5px 10px #c3cad6, -5px -5px 10px #ffffff",
        "neu-pressed":
          "inset 6px 6px 12px #c3cad6, inset -6px -6px 12px #ffffff",
        "neu-pressed-lg":
          "inset 9px 9px 18px #c3cad6, inset -9px -9px 18px #ffffff",
        "neu-convex":
          "6px 6px 12px #c3cad6, -6px -6px 12px #ffffff, inset 1px 1px 1px rgba(255,255,255,0.4)",
        "neu-hover": "3px 3px 8px #c3cad6, -3px -3px 8px #ffffff",
      },
      borderRadius: {
        neu: "22px",
        "neu-sm": "14px",
        "neu-lg": "32px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0A4291 0%, #0D5AB8 50%, #08356F 100%)",
        "teal-gradient": "linear-gradient(135deg, #2FC3AC 0%, #17A398 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
