import {
    Box, Flex, Drawer, Image,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Badge, Button, useDisclosure,
    Text,
    Link,
} from "@chakra-ui/react"
import React, {useState} from 'react'
import MainBgWrapper from "../../core/MainBgWrapper"
import ContainerWrapper from "../../core/ContainerWrapper"
import MenuLink from './../../core/MenuLink';
import SideMenuItem from './../../core/SideMenuItem';
import FooterMenuLink from "../../core/Footer/FooterMenuLink"

const BusinessDrawer = ({sideMenuDisplay, mainMenuDisplay, footerMenuDisplay}) => {
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
            <Button p="0px" colorScheme="transparent" bg="transparent" dislay="flex" transition=".5s ease-in-out" flexDirection="column" ref={btnRef} onClick={onOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Box as="span" display={mainMenuDisplay}><MenuLink link="#" linkText="Business" /></Box>
                <Box as="span" ml="auto" display={sideMenuDisplay}><SideMenuItem link="#" linkText="Business"/></Box>
                <Box as="span" ml="auto" display={footerMenuDisplay}><FooterMenuLink linkText="Business" linkUrl="#" /></Box>

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
                                        <Box maxW="1055px" w="100%" mx="auto" my="auto">
                                            <Flex mx="-10px">
                                                <Flex flexDirection="column" alignItems="flex-start" w="40%" px="10px">
                                                    <Text
                                                        font-family="body"
                                                        fontStyle="italic"
                                                        fontWeight="700"
                                                        fontSize="40px"
                                                        lineHeight="44px"
                                                        color="#5CFF15"
                                                    >Business</Text>
                                                </Flex>
                                                <Flex alignItems="flex-start" justifyContent="space-between" w="60%" px="10px">
                                                    <Link href="/consumer" px="10px"
                                                        textDecoration="underline"
                                                        fontStyle="italic"
                                                        fontWeight="700"
                                                        fontSize={{ xl: "20px", md: "18px", base: "16px" }}
                                                        lineHeight="44px"
                                                        color="#FFFFFF"
                                                    >
                                                        Consumer
                                                    </Link>

                                                    <Link href="/inovation" px="10px"
                                                        textDecoration="underline"
                                                        fontStyle="italic"
                                                        fontWeight="700"
                                                        fontSize={{ xl: "20px", md: "18px", base: "16px" }}
                                                        lineHeight="44px"
                                                        color="#FFFFFF"
                                                    >
                                                        Innovation
                                                    </Link>

                                                    <Link href="/enterprise" px="10px"
                                                        textDecoration="underline"
                                                        fontStyle="italic"
                                                        fontWeight="700"
                                                        fontSize={{ xl: "20px", md: "18px", base: "16px" }}
                                                        lineHeight="44px"
                                                        color="#FFFFFF"
                                                    >
                                                        Enterprise
                                                    </Link>
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

export default BusinessDrawer
