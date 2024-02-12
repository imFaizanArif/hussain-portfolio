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
        'neutral-50': '#F8FAFC',
        'neutral-100': '#F1F5F9',
        'neutral-200': '#E2E8F0',
        'neutral-300': '#CBD5E1',
        'neutral-400': '#94A3B8',
        'neutral-500': '#68788D',
        'neutral-600': '#45505E',
        'neutral-700': '#343C46',
        'neutral-800': '#23282F',
        'neutral-900': '#181F27',
        'primary-dark': '#233358',
        'gradient-start': '#5A7CFF',
        'gradient-end': '#5FC6FF',
        'info': '#5A7CFF',
        'error': '#E9524A',
        'warning': '#F29B28',
        'success': '#1CB47C',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
