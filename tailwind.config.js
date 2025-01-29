/** @type {import('tailwindcss').Config} */
// Importing the Tailwind CSS configuration type for TypeScript support

export default {
  content: [
    './index.html', // Specifies the HTML file to scan for class usage
    './src/**/*.{js,ts,jsx,tsx}' // Includes all JS, TS, JSX, and TSX files inside the src folder
  ],
  theme: {
    extend: {}, // Used to customize and extend the default Tailwind theme
  },
  plugins: [] // Array to include additional Tailwind plugins if needed
};
