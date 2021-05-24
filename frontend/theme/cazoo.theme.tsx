import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#f4f6f5",
          color: "#454444",
          fontFamily: "Raleway, sans-serif",
        },
       
      },
    },
    colors: {
      brand : { 
        
        'light' : "#F66E5D",
        'normal': "#c33b2a",
        'dark' : "#900800",  
    }
  }
}) ;

export default theme ; 