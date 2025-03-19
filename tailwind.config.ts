import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "450px",
      xxsm: "400px",
      // => @media (min-width: 400px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1700px",
      // => @media (min-width: 1700px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "5rem",
        "3xl": "5rem",
      },
      screens: {
        md: "100%",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
        "3xl": "1760px",
      },
    },
    extend: {
      fontFamily: {
        fontBWGradual: ["var(--font-bw-gradual)", "sans-serif"],
      },
      colors: {
        primary: "#8266F2",
        white: "#FFFFFF",
        white800: "#FFFFFF14",
        white600: "#FFFFFF1F",
        sub_heading_color: "rgba(255, 255, 255, 0.4)",
        background_dark: "#1A1A1A",
        darkest_white: "rgba(255, 255, 255, 0.08)",
        dark_white: "rgba(255, 255, 255, 0.16)",
        darker_white: "rgba(255, 255, 255, 0.24)",
        black_one: "#111111",
        black_two: "#1A1A1A",
        black_three: "#1F1F1F",
        dark_gray: "#333333",
        gray_one: "#808080",
        light_gray: "#FFFFFF3D",
        sidebar_background: "rgba(26, 26, 26, 1)",
        text_success: "rgba(77, 255, 74, 0.24)",
        success: "rgba(77, 255, 74, 1)",
        toggle_color: "rgba(157, 157, 157, 1)",
        toggle_active_color: "rgba(130, 102, 242, 1)",
        overlay_color: "rgba(0, 0, 0, 0.62)",
        eth_color: "rgba(217, 217, 217, 1)",
        error_color: "#FF0000",
        inactive_color: "rgba(144, 144, 144, 1)",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(180deg, #9488C3 0%, #8266F2 79.87%)",
        hover_background_gradient:
          "linear-gradient(180deg, #9488C3 0%, #8266F2 79.87%)",
        "background-gradient":
          "linear-gradient(180deg, rgba(148, 136, 195, 0.5) 0%, rgba(130, 102, 242, 0.5) 79.87%)",
        "testimonial-gradient":
          "linear-gradient(90deg, #8266F2 0%, #8266F2 58.09%, rgba(255, 255, 255, 0.8) 73.5%, #8266F2 88.51%, #9488C3 100%)",
        refund_card_gradient:
          "linear-gradient(180deg, #9488C3 0%, #8266F2 79.87%)",
      },
      fontSize: {
        64: ["4rem", { lineHeight: "4.8rem", fontWeight: "700" }],
        40: ["2.5rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        48: ["3rem", { lineHeight: "3.6rem", fontWeight: "700" }],
        24: ["1.5rem", { lineHeight: "1.5rem" }],
        28: ["1.75rem", { lineHeight: "1.75rem" }],
        20: ["1.25rem", { lineHeight: "1.5rem" }],
        16: ["1rem", { lineHeight: "1rem" }],
        14: ["0.875rem", { lineHeight: "0.875rem" }],
      },
      boxShadow: {
        "button-shadow": "inset 0px 0px 8px 0px rgba(255, 255, 255, 0.25)",
        "progressbar-shadow":
          "0px 0px 12px 0px #8266F2CC,0px 0px 16px 2px #8266F2CC",
        "progressbar-inner-shadow": "0 0 16px 2px rgba(130,102,242,0.8)",
        "social-icon-shadow":
          "0px 4px 24px 0px #FFFFFF3D inset, 0px 8px 12px 0px #FFFFFFB8 inset",
        'radio_btn_shadow': "0px 0px 4px 0px rgba(130, 102, 242, 1)",
      },
      keyframes: {
        slideFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideToTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-110%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        pulse: {
          "0%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 0px 0px #8266F266, 0px 0px 0px 0px #8266F27A, 0px 0px 0px 0px #8266F27A",
          },
          "20%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 40px 0px #8266F266, 0px 0px 20px 0px #8266F27A, 0px 0px 80px 0px #8266F27A",
          },
          "40%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 20px 0px #8266F266, 0px 0px 70px 0px #8266F27A, 0px 0px 100px 0px #8266F27A",
          },
          "60%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 70px 0px #8266F266, 0px 0px 80px 0px #8266F27A, 0px 0px 200px 0px #8266F27A",
          },
          "80%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 40px 0px #8266F266, 0px 0px 100px 0px #8266F27A, 0px 0px 150px 0px #8266F27A",
          },
          "100%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 0px 0px #8266F266, 0px 0px 40px 0px #8266F27A, 0px 0px 0px 0px #8266F27A",
          },
        },
        moveDiagonal: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(150px, -150px)" },
        },
        moveVertical: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(150px)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }, // Removed extra space
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse-slow": "spinReverse 30s linear infinite",
        "slide-from-top": "slideFromTop 1.5s ease-out",
        "slide-to-top": "slideToTop 1.5s ease-out",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-out": "fadeOut 1.5s ease-in-out",
        pulse: "pulse 4s infinite",
        "move-diagonal": "moveDiagonal 2s ease-in-out infinite",
        "move-vertical": "moveVertical 2s ease-in-out infinite",
      },
      rotate: {
        270: "270deg",
        "-180": "-180deg",
        180: "180deg",
      },
      borderColor: {
        primary_border: "rgba(130, 102, 242, 0.3)",
        gray_border: "rgba(255, 255, 255, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
