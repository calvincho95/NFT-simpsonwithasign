/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      partialSans: ["PartialSansKR-Regular", "sans-serif"],
      aprilPromise: ["April16th-Promise", "sans-serif"],
    },
  },
  plugins: [],
};
