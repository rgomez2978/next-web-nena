/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nena-primary": "#114C78",
        "nena-secondary": "#62B1DB",
        "nena-secondary-dark": "#5ba3c9",
        "nena-menu": "#E0EFF8",
        "nena-menu-text": "#3A6C90",
      },
      transitionProperty: {
        'background': 'background-color',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

};
