/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightskyblue: "#8eb6f8",
        dodgerblue: "#4285f4",
        gainsboro: "#d9d9d9",
        black: "#000",
        darkgray: "#979494",
        gray: "rgba(0, 0, 0, 0.4)",
        whitesmoke: "#f9f2f2",
        lightgray: "#f1f3f4"
      },
      fontFamily: {
        phetsarath: "Phetsarath",
        "open-sans": "'Open Sans'",
        oswald: "Oswald",
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
      },
    },
    plugins: [],
  }
}

