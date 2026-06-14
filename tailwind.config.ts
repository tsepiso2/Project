import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    './client/**/*.{ts,tsx}',
    './client/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
