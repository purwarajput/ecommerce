// ✅ Correct: CommonJS format
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ec3cce'
      },
      backgroundColor:{
        primary:'#ec3cce'
      }
    },
  },
  plugins: [],
}

