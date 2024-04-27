import {
    Box, Flex, Drawer, Image,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Badge, Button, useDisclosure,
} from "@chakra-ui/react"
import React, {useState} from 'react'
import MainBgWrapper from "./MainBgWrapper"
import ContainerWrapper from "./ContainerWrapper"
import MenuLink from "./MenuLink"

const MainMenu = ({barBg1, barBg2, barBg3}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [isHover, setisHover] = useState(false);
    const handleMouseEnter = () => {
        setisHover(true);
      };
    
      const handleMouseLeave = () => {
        setisHover(false);
      };
    return (
        <>
            <Button w="35px" p="0px" colorScheme="transparent" bg="transparent" display="flex" transition="0.6s ease-in-out" flexDirection="column" ref={btnRef} onClick={onOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Badge w="100%" py="4px" mb="2px" mr="auto" borderRadius="20px" bg={barBg1} />
                <Badge w="17px" py="4px" mb="2px" borderRadius="20px" bg={barBg2} mr="auto" transform={!isHover ? ("translateX(0px)"):("translateX(23px)")} transition="0.6s ease-in-out" />
                <Badge w="26px" py="4px" borderRadius="20px" bg={barBg3} mr="auto" transform={!isHover ? ("translateX(0px)"):("translateX(14px)")} transition="0.6s ease-in-out" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent maxW="100%" bg="transparent">
                    <MainBgWrapper>
                        <ContainerWrapper>
                            <Box position="relative">
                                <DrawerCloseButton bg="transparent" fontSize="10px" fontWeight="200" borderRadius="50%" border="1px solid #FFFFFF" color="#FFFFFF" h="26px" w="26px" p="4px" position="absolute" top="80px" right="0px" />
                                <DrawerBody>
                                    <Box h="100vh" alignItems="center" display="flex" w="100%" flexDirection="column"> 
                                        <Box maxW="1146px" w="100%" mx="auto" my="auto">
                                            <Flex mx="-10px" flexWrap="wrap">
                                                <Flex flexDirection="column" alignItems="flex-start" w={{md: "30%", sm: "50%", base: "100%"}} px="10px">
                                                    <MenuLink link="/home" linkText="Home" />
                                                    <MenuLink link="/about/about-details" linkText="About Enki" />
                                                    <MenuLink link="/business" linkText="Business" />
                                                    <MenuLink link="/approach/approach-detail" linkText="Approach" />
                                                </Flex>
                                                <Flex flexDirection="column" alignItems="flex-start" w={{md: "40%", sm: "50%", base: "100%"}} px="10px">
                                                    <MenuLink link="/team/team-menu" linkText="Our Team" />
                                                    <MenuLink link="/investor/investor-detail" linkText="Investor" />
                                                    <MenuLink link="/corporate-structure/corporate-structure-detail" linkText="Corporate Structure" />
                                                    <MenuLink link="/milestones/milestones-detail" linkText="Milestones" />
                                                </Flex>
                                                <Flex flexDirection="column" alignItems="flex-start" w={{md: "30%", sm: "50%", base: "100%"}} px="10px">
                                                    <MenuLink link="/faq/faq-detail" linkText="FAQs" />
                                                    <MenuLink link="/press/press-main" linkText="Press" />
                                                    <MenuLink link="/contact-us/contactus-detail" linkText="Contact US" />
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </DrawerBody>
                            </Box>
                        </ContainerWrapper>
                    </MainBgWrapper>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MainMenu
