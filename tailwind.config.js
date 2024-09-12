/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        boxShadow: {
          'green': '0 4px 6px rgba(57, 219, 74, 0.5)', // Adjust shadow properties as needed
        },
      },
    },
  };