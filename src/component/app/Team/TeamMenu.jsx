import { Box, Heading, Flex } from "@chakra-ui/react"
import React from 'react'
import SideMenu from "../../core/SideMenu"
import NextBtn from "../../core/NextBtn"
import Header from "../../core/Header"
import ContainerWrapper from "../../core/ContainerWrapper"
import Back from "../../core/Back"
import TeamCard from "./TeamCard"
import TeamMenuLink from "./TeamMenuLink"

const teamMenuData = [
    {
        name: 'Dan Brooks',
        designation: 'Designation, location', 
    },
    {
        name: 'Dan Brooks',
        designation: 'Designation, location', 
    },
    {
        name: 'Lesley Ramsay',
        designation: 'Designation, location', 
    },
    {
        name: 'Lesley Ramsay',
        designation: 'Designation, location', 
    },
    {
        name: 'Robert',
        designation: 'Designation, location', 
    },
    {
        name: 'Robert',
        designation: 'Designation, location', 
    },
    {
        name: 'Priyesh Singh',
        designation: 'Designation, location', 
    },
    {
        name: 'Priyesh Singh',
        designation: 'Designation, location', 
    },
]

const TeamMenu = () => {
    return (
        <>
            <Box bg="radial-gradient(30.74% 93.03% at 67.26% 60.74%, #130048 0%, #050827 100%)" pos="relative" h="100vh" overflow="hidden">
                <Header logoUrl="/logoenki.svg" barBg1="#5CFF15" barBg2="rgba(92, 255, 21, 0.8)" barBg3="rgba(92, 255, 21, 0.4)"/>
                <SideMenu/>
                <NextBtn url="/team-menu"/>
                <Box h="100vh" pos="fixed" top="0px" left="0px" zIndex="0"> 
                    <Flex mx="0" flexWrap="wrap">
                        <TeamCard imgUrl="/team1.png" />
                        <TeamCard imgUrl="/team2.png" />
                        <TeamCard imgUrl="/team3.png" />
                        <TeamCard imgUrl="/team4.png" />
                    </Flex>
                    <Flex mx="0" flexWrap="wrap">
                        <TeamCard imgUrl="/team5.png" />
                        <TeamCard imgUrl="/team6.png" />
                        <TeamCard imgUrl="/team7.png" />
                        <TeamCard imgUrl="/team8.png" />
                    </Flex>
                    <Flex mx="0" flexWrap="wrap">
                        <TeamCard imgUrl="/team1.png" />
                        <TeamCard imgUrl="/team2.png" />
                        <TeamCard imgUrl="/team3.png" />
                        <TeamCard imgUrl="/team4.png" />
                    </Flex>
                    <Flex mx="0" flexWrap="wrap">
                        <TeamCard imgUrl="/team5.png" />
                        <TeamCard imgUrl="/team6.png" />
                        <TeamCard imgUrl="/team7.png" />
                        <TeamCard imgUrl="/team8.png" />
                    </Flex>
                </Box>
                <ContainerWrapper>
                    <Box pos="relative">
                        <Back url="/team" imgUrl="/backarrow.svg" />
                        <Box maxW="1570px" mx="auto" pt={{xxl: "100px", lg: "80px", md:"70px", base:"50px"}}>
                            <Flex mx="-15px" flexWrap="wrap">
                                {teamMenuData.map((info,index) => {
                                    return (
                                        <Box w={{sm: "50%", base: "100%"}} flexWrap="wrap" px="15px" mb={{md: "30px", sm: "20px", base: "16px"}}>
                                            <TeamMenuLink key={index} data={info}/>
                                        </Box>
                                    );
                                })}
                                
                            </Flex>
                        </Box>
                    </Box>
                </ContainerWrapper>
            </Box>
        </>
    )
}

export default TeamMenu
