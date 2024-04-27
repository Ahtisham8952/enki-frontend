import { Badge, Box, Button, Container, Flex, Link, Image } from "@chakra-ui/react"
import React from 'react'
import MainMenu from "./MainMenu"
import ContainerWrapper from "./ContainerWrapper"

const Header = ({logoUrl, barBg1, barBg2, barBg3}) => {
    return (
        <Box position="relative" zIndex="999">
            <ContainerWrapper>
                <Flex justifyContent="space-between" pt="40px" pb={{xl: "0px", base: "30px"}}>
                    <Link href="/" maxW={{md: "100%", base: "46%"}}>
                        <Image
 alt="img" src={logoUrl}  />
                    </Link>
                    <Box pt={{xl: "45px", base: "0px"}}>
                        <MainMenu barBg1={barBg1} barBg2={barBg2} barBg3={barBg3}/>
                    </Box>
                </Flex>
            </ContainerWrapper>
        </Box>
    )
}

export default Header
