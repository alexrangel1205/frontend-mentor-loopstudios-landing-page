module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/app.js",


],
  theme: {
      extend: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        backgroundImage: theme => ({
          'images-mobile': "url('/images/mobile/image-hero.jpg')",
          'images-desktop': "url('/images/desktop/image-hero.jpg')",
          'image-interactive-mobile': "url('/images/mobile/image-interactive.jpg')",
          'image-interactive-desktop': "url('/images/desktop/image-interactive.jpg')",
          'image-hamburger': "url('/images/icon-hamburger.svg')",
          'image-close': "url('/images/icon-close.svg')",     
        
      }),  
        colors: {
          'dark-gray': 'hsl(0, 0%, 55%)',
          'very-dark-gray': 'hsl(0, 0%, 41%)',
          'White': 'hsl(0, 0%, 100%)',
          'Black': 'hsl(0, 0%, 0%)',
        },
        fontFamily: {
          alata: '"Alata", sans-serif',
          josefin: "'Josefin Sans', sans-serif",
        },
        fontWeight:{
          thin: 200,
        },
        translate: {
          '15': '1rem',
        },
      },
 
    
    
  },
  plugins: [],
}
