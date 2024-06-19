import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'slide-out': 'slideOut 0.5s ease-in forwards',
      },
      colors: {
        "custom-gradient-roadmap": "linear-gradient(90deg, #F9C96D, #FA98BE, #FA79F2)"
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))', // Example: Extend to 13 columns
        '15': 'repeat(15, minmax(0, 1fr))', // Example: Extend to 15 columns
        // Add more as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-one": "linear-gradient(90deg, #885ABA, #B36EC8, #BF5EC5)",
        "custom-gradient-two": "linear-gradient(135deg, #1E152B, #271D39, #010101)",
        "custom-gradient-three": "linear-gradient(90deg, #25314B, #332F45, #281D32)",
        "custom-gradient-four": "linear-gradient(90deg, #3D535F, #4B4E50, #1B1B1B)",
        "custom-gradient-five": "linear-gradient(90deg, #60455E, #564856, #322F32)",
        "custom-gradient-six": "linear-gradient(90deg, #302F30, #544D5F, #2A2138)",
        "custom-gradient-seven": "linear-gradient(90deg, #4E324A, #A25ABE, #9A5ABC)",
        "gradient-first":"linear-gradient(180deg,black,#271934,#1d293c)",
        "gradient-two":"linear-gradient(350deg,#271934 ,black 15%,#1d293c 40%)",
        "gradient-three":"linear-gradient(270deg,#271934,black 75%)",
        "gradient-four":"linear-gradient(45deg,black 75%,#271934)",
        "gradient-five":"linear-gradient(45deg,#2c2810,black ,#1d293c,#271934)",
        "gradient-six":"linear-gradient(120deg,#2c2810,black ,#271934,#1d293c)",
        "gradient-seven":"linear-gradient(210deg,#1d293c,#271934,#2c2810,black)",
        "gradient-eight":"linear-gradient(120deg,black,#2a4e6a,#1d293c,#271934)",
      },
      textColor: {
        "custom-gradient-roadmap": "var(--custom-gradient-roadmap)" // Use custom variable for gradient
      }
    },
  },
  plugins: [
  ],
};

export default config;
