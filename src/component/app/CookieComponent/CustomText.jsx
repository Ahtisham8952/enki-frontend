import { Text } from '@chakra-ui/react'
import React from 'react'

const CustomText = ({Textb,marginbtm}) => {
  return (
   <>
    <Text
       fontFamily="Montserrat"
            
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mb={marginbtm}
          >
   {Textb}
          </Text>
   </>
  )
}

export default CustomText