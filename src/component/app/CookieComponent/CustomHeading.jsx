import { Heading } from '@chakra-ui/react'
import React from 'react'

const CustomHeading = ({HeadingText}) => {
  return (
    <>
    <Heading
           fontFamily="poppins"
            color="#000000"
            fontSize={{base:'28px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mb={{base:'10px',md:'14px',lg:'20px',xl:'24px'}}
         
            fontStyle="italic"
         
          >
{ HeadingText}
          </Heading>
    </>
  )
}

export default CustomHeading