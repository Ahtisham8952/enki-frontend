import { Box, Heading, Flex, Text, Button, Image, Container } from '@chakra-ui/react'
import React from 'react'

const HomeBanner = () => {
  return (
    <>
      <Box>
        <Container maxW="1710px" mx="auto" px="20px">
          <Flex>
            <Box w="50%" pt={{xl: "111px", lg: "90px", base: "80px"}}>
              <Box maxW="840px" w="100%" >
                <Heading as="h2"
                  fontFamily="body"
                  fontWeight="100"
                  fontSize="88px"
                  lineHeight="112px"
                  bg="linear-gradient(251.57deg, #FFFFFF 37.5%, #EFEFEF 89.58%)"
                  backgroundClip="text"
                  textFillColor="transparent"
                  mb="36px"
                  css={{
                    '-webkit-background-clip': "text",
                    '-webkit-text-fill-color': "transparent",
                  }}
                >
                  The Home of
                  Magnetic ambition
                </Heading>
                <Text
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="37px"                  
                  color="#FFFFFF"
                  mb="32px"
                >
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                  inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </Text>
                <Button bg="#EA1075" colorScheme="#EA1075" borderRadius="2px" py="18px" px="34px" h="63px"
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="27px"
                  textAlign="center"
                  color="#FFFFFF"
                  mb="30px"
                >
                  Explore Plutofund
                </Button>
              </Box>
            </Box>

            <Box w="50%">
              <Box textAlign="right">
                <Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/banner-img.svg"  ml="auto" />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default HomeBanner