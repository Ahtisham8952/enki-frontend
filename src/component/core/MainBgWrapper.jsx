import { Box, Image, } from '@chakra-ui/react'
import React from 'react'

const MainBgWrapper = ({children}) => {
  return (
    <>
      <Box 
        bg="radial-gradient(30.74% 93.03% at 67.26% 60.74%, #130048 0%, #050827 100%)"
        // bgImage="/bodylogodump.png"
        bgPosition="center center"
        bgSize="100% 100%"
        bgRepeat="no-repeat"
        pos="relative" 
        h="100vh" 
        overflow="hidden">
        <Image
 alt="img" src="/e.png" alt="e" pos="absolute" top="0px" h="100%" zIndex="0" left="0px" objectFit="cover" opacity="0.04" />
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/circle.png" alt="e" pos="absolute" bottom="10%" zIndex="0" w={{xxl: "auto", xl: "15%", base: "0%"}} right="0px" objectFit="cover" opacity="0.04" />
        <Box pos="relative" zIndex={2}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default MainBgWrapper