/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B3D22',
          light: '#1F5C3D',
          dark: '#082A17',
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#E8C07A',
          dark: '#B4842E',
        },
        clay: {
          DEFAULT: '#B5652E',
          light: '#D08A52',
          dark: '#8C4C21',
        },
        sage: '#EEF3EA',
        ivory: '#FEFCF8',
        ink: '#1C1B18',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
