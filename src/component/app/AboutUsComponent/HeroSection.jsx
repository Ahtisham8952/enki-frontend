import { Box, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const HeroSection = ({ bgColor, Text1, Text2, Description }) => {
  return (

    <Box maxW={"1201px"} mx="auto" mb={{ base: '30px', md: '40px', lg: '50px', xl: '99px' }}>


      <Box display={"flex"} alignItems={"center"} position={"relative"} height={{ base: '130px', md: '220px', lg: '199px', xl: '288px', xxl: '308px' }}  >
        <Box position={"relative"}


          zIndex="99"
          pl={{ base: '35px', md: '72px', lg: '118px', xl: '116px', xxl: '134px' }}
          // pt={{base:'41px',sm:'41px',md:'65px',lg:'101px',xl:'131px',xxl:'131px'}}
          pt={{ base: '0px', sm: '0px', md: '0px', lg: '101px', xl: '100px', xxl: '100px' }}
        >

          <Text
            fontFamily={"poppins"}
            fontStyle={"italic"}
            color="#000000"
            fontSize={{ base: '43px', sm: '68px', md: '80px', lg: '100px', xl: '120px', xxl: '130px', xxl: '164px' }}
            fontWeight="700"
            lineHeight={{ base: '68px', md: '80px', lg: '100px', xl: '120px', xxl: '130px', xxl: '164px' }}
          >
            {Text1}
          </Text>

        </Box>

        <Box position={"absolute"}
          top="0px"
          width={{ base: '130px', md: '220px', lg: '300px', xl: '380px', xxl: '426px' }}
          height={{ base: '130px', md: '220px', lg: '300px', xl: '380px', xxl: '426px' }}
          borderRadius="50%"
          backgroundColor="#5CFF15"
          overflow="visible"

        >

        </Box>

      </Box>

      <Text
        mt={{ base: '20px', lg: '60px' }}
        color="#000000"
        fontSize={{ base: '14px', md: '18px', xl: '24px' }}
        fontWeight="500"
        lineHeight="180%"
        maxW='752px'
        w="100%"
        ml="auto"
        fontFamily="Montserrat"
        position="relative"
        zIndex="11"
      >
        {Description}
      </Text>
    </Box>


  )
}

export default HeroSection