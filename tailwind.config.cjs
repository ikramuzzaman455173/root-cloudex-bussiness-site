module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nav-color': '#111A30',
        "nav-link-color": '#00d5ff',
        "border-c": '#ddd',
        "navlinks-c":"#14143F",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
