/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   'ql-editor',
  //   'ql-container',
  //   'ql-toolbar',
  //   'ql-active',
  //   'ql-disabled',
  //   'ql-snow',
  //   'ql-size-huge',
  //   'ql-size-small',
  //   'ql-bold',
  //   'ql-italic',
  //   'ql-underline',
  //   'ql-blockquote',
  //   'ql-list',
  //   'ql-syntax',
  // ],
  theme: {
    extend: {
        colors: {
          customTeal: "#3A7C80",
          textColor1: "#555555",
          textColor2: "#39494A"
        },
        fontFamily: {
          poppins: "Poppins",
          raleway: "Raleway",
          outfit: "Outfit",
          
        }
    },
  },
  plugins: [],
}

