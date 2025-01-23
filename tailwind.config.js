// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./layout/*.liquid",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js", // If you use JavaScript files in your Shopify project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
