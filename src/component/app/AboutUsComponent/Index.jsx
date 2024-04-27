import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../../core/BreadCrumbs'
import FundFact from './FundFact'
import HeroSection from './HeroSection'
import Header from '../../core/Header'
import Back from '../../core/Back'
import ContainerWrapper from '../../core/ContainerWrapper'
import { m } from 'framer-motion'
import Footer from '../../core/Footer/Footer'

const AboutusMain = () => {
  return (
    <>
      <Box>
        <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)"/>
        <ContainerWrapper>
          <Back imgUrl="/dark-back.svg" url="/about-us" />
      <Box bg="white">
        <BreadCrumbs PageLink="/about" PageName=" About Us" />
        <HeroSection
          Text1="About us"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
        />
        <Box maxW={"1417px"} w='100%' ml="auto">
          <Flex gap='32px' mb={{ base: '30px', md: '40px', lg: '50px', xl: '99px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box w={{ base: '100%', md: '50%' }}>
              <Text
                color="#000000"
                fontSize={{ base: "14px", sm: '16px', md: '18px', xl: '24px' }}
                fontWeight="500"
                lineHeight="180%"
                mb="20px"
                textAlign={{ base: 'center', md: 'left' }}


              >
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </Text>
              <Text

                textAlign={{ base: 'center', md: 'left' }}
                color="#000000"
                fontSize={{ base: "14px", sm: '16px', md: '18px', xl: '24px' }}
                fontWeight="500"
                lineHeight="180%"
              >
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '50%' }}>
              <Image
 alt="img" objectFit={"cover"} h="100%" src="https://cdn.enochdev.com/enki/imagcard1.webp"></Image>
            </Box>


          </Flex>


        </Box>
        <Box maxW={"1417px"} w='100%' mr="auto">
          <Flex gap='32px' mb={{xl: '99px', lg: "80px", md: "70px", base: "50px"}} flexDirection={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '50%' }}>
              <Image
 alt="img" objectFit={"cover"} h="100%" src="https://cdn.enochdev.com/enki/imagcard2.webp"></Image>
            </Box>
            <Box w={{ base: '100%', md: '50%' }}>
              <Text
                maxW={"614px"}
                color="#000000"
                fontSize={{ base: "14px", sm: '16px', md: '18px', xl: '24px' }}
                fontWeight="500"
                lineHeight="180%"
                mb="20px"
                textAlign={{ base: 'center', md: 'left' }}
                mx={{ base: 'auto', md: '0px' }}
              >
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar
              </Text>
              <Text
                maxW={"614px"}
                mx={{ base: 'auto', md: '0px' }}
                textAlign={{ base: 'center', md: 'left' }}
                color="#000000"
                fontSize={{ base: "14px", sm: '16px', md: '18px', xl: '24px' }}
                fontWeight="500"
                lineHeight="180%"
              >
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.
              </Text>
            </Box>

          </Flex>


        </Box>
      </Box>
      <Box pb="100px">
        <FundFact />
      </Box>
        </ContainerWrapper>
        <Footer/>
      </Box>
    </>
  )
}

export default AboutusMain