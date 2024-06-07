/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*./indexedDB.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

