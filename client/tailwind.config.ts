import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        butler: ['"Lora"', 'serif'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      spacing: {
        '15': '3.75rem',
        '32': '8rem',
        '140': '35rem',
      },
    },
  },
  plugins: [],
} satisfies Config
