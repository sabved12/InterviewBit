module.exports = {
    darkMode: 'class', // Enable dark mode
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all relevant files
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwindcss-animate'), // Add the plugin here
    ],
  };