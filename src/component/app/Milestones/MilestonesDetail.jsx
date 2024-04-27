import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import Back from '../../core/Back'
import ContainerWrapper from '../../core/ContainerWrapper'
import Header from '../../core/Header'
import BreadCrumbs from '../../core/BreadCrumbs'
import HeroSection from '../AboutUsComponent/HeroSection'
import Footer from '../../core/Footer/Footer'

const MilestonesDetail = () => {
  return (
    <>
    <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)"/>
       <ContainerWrapper> 
       <Back imgUrl="/dark-back.svg" url="/milestones" />
 
  <BreadCrumbs PageLink="/milestones" PageName=" Milestones"/>
<HeroSection

Text1="Milestones"

Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
/>


</ContainerWrapper>
<Footer/>

  </>
  )
}

export default MilestonesDetail