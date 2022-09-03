/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'small': ["'Nunito Sans'", 'sans-serif', ],
      'large': ["'PT Serif'", 'serif', ],
    },
    extend: {},
  },
  plugins: [],
};
