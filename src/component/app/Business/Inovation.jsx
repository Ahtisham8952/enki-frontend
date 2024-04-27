import { Box, Heading } from "@chakra-ui/react"
import React from 'react'
import ReadmoreBtn from "../../core/ReadmoreBtn"
import SideMenu from "../../core/SideMenu"
import NextBtn from "../../core/NextBtn"
import Header from "../../core/Header"
import ContainerWrapper from "../../core/ContainerWrapper"
import Back from "../../core/Back"
import PageIntroText from "../../core/PageIntroText"

const Inovation = () => {
    return (
        <>
            <Box bg="radial-gradient(30.74% 93.03% at 67.26% 60.74%, #130048 0%, #050827 100%)" pos="relative" h="100vh" overflow="hidden">
                <Header logoUrl="/logoenki.svg" barBg1="#5CFF15" barBg2="rgba(92, 255, 21, 0.8)" barBg3="rgba(92, 255, 21, 0.4)"/>
                <ReadmoreBtn url="/business"/>
                <SideMenu/>
                <NextBtn url="/approach-page"/>
                <ContainerWrapper>
                    <Box pos="relative">
                        <Back url="/" imgUrl="/backarrow.svg" />
                        <Box pt={{xl: "10%", lg: "15%", md: "20%", base: "25%"}}>
                            <PageIntroText 
                                pageTitle="Inovation"
                                // pragraph="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                            />
                        </Box>
                    </Box>
                </ContainerWrapper>
            </Box>
        </>
    )
}

export default Inovation
