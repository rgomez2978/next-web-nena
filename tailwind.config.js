/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extensions: ['.js', '.jsx', '.json', '.woff2'],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["var(--font-segoe)"],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      colors: {
        "nena-primary": "#114C78",
        "nena-secondary": "#62B1DB",
        "nena-secondary-dark": "#5ba3c9",
        "nena-secondary-dark2": "#5faad2",
        "nena-menu": "#E0EFF8",
        "nena-menu-text": "#3A6C90",
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '70%': { transform: 'translateY(5px)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

      },
      variants: {
        extend: {
          animation: ['responsive'],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base',
    }),
    require('tailwindcss-animated')
  ],
};
