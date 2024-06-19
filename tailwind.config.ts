import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-one":"linear-gradient(90deg, #885ABA, #B36EC8, #BF5EC5)",
        "custom-gradient-two":"linear-gradient(90deg, #403363, #000101)",
        "custom-gradient-three":"linear-gradient(90deg, #25314B, #332F45, #281D32)",
        "custom-gradient-four":"linear-gradient(90deg, #3D535F, #4B4E50, #1B1B1B)",
        "custom-gradient-five":"linear-gradient(90deg, #60455E, #564856, #322F32)",
        "custom-gradient-six":"linear-gradient(90deg, #302F30, #544D5F, #2A2138)",
        "custom-gradient-seven":"linear-gradient(90deg, #4E324A, #A25ABE, #9A5ABC)"
      },
    },
  },
  plugins: [],
};
export default config;
