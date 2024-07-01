/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Mulish', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      textIndent: {
        '128': '32rem',
      },
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
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '70%': { transform: 'translateY(5px)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

      }
    },
  },

};
