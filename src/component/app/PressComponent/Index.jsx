import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../../core/BreadCrumbs'
import FundFact from '../AboutUsComponent/FundFact'
import HeroSection from '../AboutUsComponent/HeroSection'
import PressCard from './PressCard'
import Header from '../../core/Header'
import Back from '../../core/Back'
import ContainerWrapper from '../../core/ContainerWrapper'
import Footer from '../../core/Footer/Footer'

const PressMain = () => {
  return (
    <>
      <Box>
        <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)" />
        <ContainerWrapper>
          <Back imgUrl="/dark-back.svg" url="/faqs" />
          <Box bg="white" mb="100px" >
            <BreadCrumbs PageLink="/press" PageName=" Press" />
            <HeroSection

              Text1="Press"

              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
            />
            <Box maxW={"1080px"} w='100%' mx="auto">

              <PressCard />
            </Box>

          </Box>
        </ContainerWrapper>
        <Footer/>
      </Box>
    </>
  )
}

export default PressMain