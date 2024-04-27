import { extendTheme } from '@chakra-ui/react'
import "@fontsource/bakbak-one"
import "@fontsource/inter"
import "@fontsource/montserrat-alternates"
import "@fontsource/rubik"
import "@fontsource/poppins"
import "@fontsource/saira"

export const mynewtheme = extendTheme({
  
  colors: {
    primary: "#5D5AF2 ",
    body: "#040C12"
  },
  components: {
    Tabs: {
      variants: {
        'line': {
          tab: {
            color: "#FFFFFF",
            borderbottom: "none",

            _selected: {
              borderColor: '#12BDF3',
              borderbottom: "2px solid",
              color: "#258CEC",

            }
          }
        }
      },
    }
  },
  breakpoints: {
    xsm: "480px",
    sm: "575px",
    md: "768px",
    lg: "991px",
    xl: "1280px",
    xxl: "1440px",
  },
  fonts: {
    primary: `"Bakbak One", cursive`,
    body: `"Poppins", sans-serif`,
    montserratAlternates: `"Montserrat Alternates", sans-serif`,
    // rubik: `"Rubik", sans-serif"` ,
  },



})