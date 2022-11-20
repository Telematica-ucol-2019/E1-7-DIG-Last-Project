module.exports = {
  content: ['./src/**/*.{vue,js,ts}', './nuxt.config.{js,ts}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': '#502050',
        'soft-violet': '#ee68a4',
        'dark-grayish-magenta': '#937b92',
        'light-grayish-magenta': '#f7f2f7',
        white: '#ffffff',
      },
      backgroundImage: {
        'pattern-desktop':
          "url('/assets/svg/bg-pattern-bottom-desktop.svg'), url('/assets/svg/bg-pattern-top-desktop.svg')",
        'pattern-mobile':
          "url('/assets/svg/bg-pattern-bottom-mobile.svg'), url('/assets/svg/bg-pattern-top-desktop.svg')",
      },
    },
  },
};
