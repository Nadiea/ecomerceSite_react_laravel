/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 16px
        sm: '1rem',      // 32px
        lg: '4rem',      // 64px
        xl: '5rem',      // 80px
        '2xl': '6rem',   // 96px
      },
    },
    screens: {
      sm: '640px',   // Small screens (mobile)
      md: '768px',   // Medium screens (tablet)
      lg: '1024px',  // Large screens (laptop)
      xl: '1280px',  // Extra large screens (desktop)
      '2xl': '1536px', // 2x extra large screens (large desktop)
    },
  },
  plugins: [],
};
