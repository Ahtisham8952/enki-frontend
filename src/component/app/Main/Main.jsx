import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import MainBgWrapper from '../../core/MainBgWrapper'
import Header from '../../core/Header'
import SideMenu from '../../core/SideMenu'
import NextBtn from '../../core/NextBtn'

const Main = () => {
  return (
    <>
      <Box>
        <MainBgWrapper>
            <Box position="relative" >
              <SideMenu/>
              <Header logoUrl="/logoenki.svg" barBg1="#5CFF15" barBg2="rgba(92, 255, 21, 0.8)" barBg3="rgba(92, 255, 21, 0.4)"/>
              <Box maxW={{lg: "421px", md: "280px", sm: "150px", base: "100px"}} mx="auto" py="100px">
                <Flex alignItems="center" justifyContent="space-between" h={{lg: "421px", md: "280px", sm: "150px", base: "100px"}} maxW={{lg: "421px", md: "280px", sm: "150px", base: "100px"}} ml="-30px" w="100%">
                  <Image
 alt="img" src="/e.png" alt="icon" />
                  <Image
 alt="img" src="/corecirlce.png" alt="icon" w="40%" />
                </Flex>
              </Box>
              <NextBtn url="/home"/>
            </Box>
        </MainBgWrapper>
      </Box>
    </>
  )
}

export default Main