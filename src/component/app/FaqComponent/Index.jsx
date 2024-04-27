import { Box,Flex,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../../core/BreadCrumbs'
import FundFact from '../AboutUsComponent/FundFact'
import HeroSection from '../AboutUsComponent/HeroSection'
import FaqAccordian from './FaqAccordian'
import Header from '../../core/Header'
import ContainerWrapper from '../../core/ContainerWrapper'
import Back from '../../core/Back'
import Footer from '../../core/Footer/Footer'
const faqs=[
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    
]
const FaqMain = () => {
  return (
    <>
    <Box>
    <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)"/>
    <ContainerWrapper>
    <Back imgUrl="/dark-back.svg" url="/faqs" />
    <Box bg="white" pb="87px" >
   <BreadCrumbs PageLink="/faq" PageName=" FAQ"/>
 <HeroSection

 Text1="FAQs"

 Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
 />
<Box maxW={"1080px"} w="100%" mx="auto">
<Text
            mb="32px"
            color="#18191F"
            fontSize={{base:'20px',md:'22px',lg:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight={"64px"}
            fontStyle="italic"
          >
    Frequently Asked Questions
          </Text>
          {
            faqs.map((li,index)=>{
                return(
                    <FaqAccordian key={index} Question={li.askquestion} Answer={li.tellanswer}/>
                )
            })
          }
         
</Box>
   </Box>
    </ContainerWrapper> 
    <Footer/>
    </Box>
 
   </>
  )
}

export default FaqMain