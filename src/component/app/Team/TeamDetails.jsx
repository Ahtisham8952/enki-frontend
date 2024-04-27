import { Box, Heading, Flex, Image, Text, Link } from "@chakra-ui/react"
import React from 'react'
import SideMenu from "../../core/SideMenu"
import NextBtn from "../../core/NextBtn"
import Header from "../../core/Header"
import ContainerWrapper from "../../core/ContainerWrapper"
import Back from "../../core/Back"

const TeamDetails = () => {
    return (
        <>
            <Box bg="radial-gradient(30.74% 93.03% at 67.26% 60.74%, #130048 0%, #050827 100%)" pos="relative" h="auto" overflow="hidden" pb="80px">
                <Header logoUrl="/logoenki.svg" barBg1="#5CFF15" barBg2="rgba(92, 255, 21, 0.8)" barBg3="rgba(92, 255, 21, 0.4)"/>
                <SideMenu/>
                <NextBtn url="/#"/>
                <ContainerWrapper>
                    <Box pos="relative">
                        <Back url="/team/team-menu" imgUrl="/backarrow.svg" />
                        <Box pt={{lg: "106px", md: "90px", base: "60px"}}>
                            <Flex mx="-20px" flexWrap="wrap" pr={{xxl: "50px", base: "40px"}}>
                                <Box w={{lg: "50%", base: "100%"}} pb={{lg: "0px", base: "30px"}} px="20px">
                                    <Image
 alt="img" src="/team2.png" alt="img" w="100%" h="100%" objectFit="cover" />
                                </Box>
                                <Box w={{lg: "50%", base: "100%"}} px="20px">
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{xxl: "48px", xl: "40px", lg: "32px", base: "24px"}}
                                        lineHeight="150%"
                                        color="#FFFFFF"
                                        fontFamily="body"
                                        mb="20px"
                                    >
                                        Dan Brooks
                                    </Heading>
                                    <Text
                                        mb="36px"
                                        fontWeight="500"
                                        fontSize={{xxl: "32px", xl: "24px", lg: "20px", base: "18px"}}
                                        lineHeight="100%"
                                        color="#FFFFFF"
                                    >
                                        Designation, location
                                    </Text>
                                    <Text
                                        fontWeight="400"
                                        fontSize={{xxl: "18px", lg: "16px", base: "14px"}}
                                        lineHeight="180%"
                                        color="#FFFFFF"
                                        maxW="872px"
                                        w="100%"
                                    >
                                        Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
                                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
                                        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
                                        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis 
                                        convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                    </Text>
                                    <Flex mt="24px">
                                        <Link href="#" mr="16px"><Image
 alt="img" src="https://cdn.enochdev.com/enki/twitter-yellow.png" alt="icon" /></Link>
                                        <Link href="#"><Image
 alt="img" src="https://cdn.enochdev.com/enki/linkdin.png" alt="icon" /></Link>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </ContainerWrapper>
            </Box>
        </>
    )
}

export default TeamDetails
