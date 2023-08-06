module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nav-color': '#111A30',
        "nav-link-color": '#00d5ff',
        "border-c": '#ddd',
        "navlinks-c": "#14143F",
        "scroll-bar-c": "#008CB3",
        "scroll-bar-track-c": "#40444D"
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
