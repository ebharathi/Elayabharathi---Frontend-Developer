import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
