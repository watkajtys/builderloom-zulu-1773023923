/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-pink": "#FF0080",
        "sky-blue": "#00F2FF",
        "success-cyan": "#00F2FF",
        "error-magenta": "#FF0080",
        "obsidian": "#0D0B14",
        "panel-bg": "rgba(26, 22, 37, 0.9)", // Muted Slate #1A1625 with opacity
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
