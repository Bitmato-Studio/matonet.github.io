// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ff5659',  // Adjusted as needed
          100: '#ff4a4c', // Adjusted as needed
          200: '#ff5053', // Adjusted as needed
          300: '#ff5659', // Adjusted as needed
          400: '#ff5c5f', // Lighter than the base color
          500: '#ee3e40', // Base color
          600: '#d63739', // Slightly darker
          700: '#be3133', // Darker
          800: '#a62b2c', // Darker still
          900: '#8e2526', // Dark shade
          1000: '#771f20', // Darkest shade
        },
      },
    },
  },
  plugins: [],
  // If you are using purge, add your paths to content like so:
  content: [
    './src/**/*.{html,js}', // update the glob patterns to match the file paths for your project
    // Add other paths here if needed
  ],
  // ...other configurations if any
};
