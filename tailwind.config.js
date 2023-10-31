module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/outline-text/about.svg")',
        portfolio: 'url("/src/assets/outline-text/portfolio.svg")',
        services: 'url("/src/assets/outline-text/services.svg")',
        testimonials: 'url("/src/assets/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/outline-text/contact.svg")',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/yonatan.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
