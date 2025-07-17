// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        talknet: {
          primary: "#10b981",     // green
          secondary: "#3b82f6",   // blue
          accent: "#a855f7",      // purple
          neutral: "#1e293b",     // slate
          "base-100": "#00000000" // transparent base
        },
      },
    ],
    darkTheme: "talknet",  // lock to talknet even if system theme is dark
  },
}
