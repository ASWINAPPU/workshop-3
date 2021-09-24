module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container :{
      center : true,
    },
    // backgroundColor: theme => ({
    //   ...theme('colors'),
    //   'primary': '#3490dc',
    //   'secondary': '#ffed4a',
    //   'danger': '#e3342f',
      
    //  }),
    // colors:{
    //   prime:{
    //     dark: '#263238',
    //     light:'#445A64',
        
        
    //   },
     
    // },
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
        

        

      },
      display: ['hover', 'focus',"group-hover"],
    },
    backgroundImage: {
      'center-pattern': "url('../assets/coffe.svg')",
      
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
