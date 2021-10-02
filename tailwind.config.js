module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  
  theme: {
   
    container :{
      center : true,
    },
 
     
    extend: {
      
      colors:{
        'first':'#f3ead6',
        'second':'#E7E6FF',
        'dark': '#263238',
        'light':'#445A64',
        'coffee':'#F97794',
        'bgc':'#FAFAF6',
        'BGC2': '#F7F9FF',
        'newp': '#EE7892',
        'footer':'#282828',
        'accordion':'#D0D0D0',
        'link':'#F44916'
      },
      height: {
        ham: '92vh',
       },
      width: {
        '1/12': '9% !important',
       },
      display: ['hover', 'focus',"group-hover"],
    },
    backgroundImage: {
      'center-pattern': "url('../assets/coffe.svg')",
     },
     boxShadow: {
       'all':'0 3px 10px rgb(0 0 0 / 15%)',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
