import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import Back from '../../core/Back'
import ContainerWrapper from '../../core/ContainerWrapper'
import Header from '../../core/Header'
import BreadCrumbs from '../../core/BreadCrumbs'
import HeroSection from '../AboutUsComponent/HeroSection'
import Footer from '../../core/Footer/Footer'

const InvestorDetail = () => {
  return (
    <>
    <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)"/>
       <ContainerWrapper> 
       <Back imgUrl="/dark-back.svg" url="/investor" />
 
  <BreadCrumbs PageLink="/investor" PageName=" Investor"/>
<HeroSection

Text1="Investor"

Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
/>
<Box>

</Box>
<Box maxW={"1130px"} w="100%" mx="auto" mb="100px">

<Text
            
            color="#000000"
            fontSize="40px"
            fontWeight="700"
            lineHeight={"36px"}
            fontStyle="italic"

          >
      Our Investor
          </Text> 
          <Box mt="27px" mb="73px">
            <Image src="https://cdn.enochdev.com/enki/allinvestros.webp"></Image>

          </Box>
          <Text
            
            color="#2B3041"
            fontSize={{base:'18px',md:'24px'}}
            fontWeight="500"
            lineHeight={{base:'28px',md:'44px'}}
            maxW="1080px"
           

          >
      Enki is applying our diverse technological assets, including computing power,
       massive data sets, and a broad range of use cases to improve our AI capabilities
        in understanding, decision-making and creation, and to help bring the benefits 
        of AI to everyone, everywhere.
          </Text> 
</Box>

 
</ContainerWrapper>
<Footer/>

  </>
  )
}

export default InvestorDetail