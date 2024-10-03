import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other directories here if necessary
  ],
  darkMode: 'class', // Enables dark mode via a 'dark' class
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // Uncomment to add useful plugins
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};

export default config;
