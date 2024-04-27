import { Box, Flex, Link, Text, Image, Container } from '@chakra-ui/react'
import React from 'react'
import FooterMenuLink from './FooterMenuLink'

const Footer = () => {
    return (
        <>
            <Box bg="#031239">
                <Container maxW="1120px" mx="auto" px="20px">
                    <Box pt="40px">
                        <Flex mx="-10px" flexWrap="wrap" alignItems="flex-end">
                            <Box w={{md: "50%", base: "100%"}} px="10px" textAlign={{md: "left", base: "center"}}>
                                <Link href="/"><Image src="/logoenki.svg" alt="logo" maxW={{sm: "auto", base: "140px"}} mx={{md: "0", base: "auto"}} /></Link>
                                <Text
                                    color="#B1B8D2"
                                    fontSize="14px"
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    lineHeight="22px"
                                    mt="12px"
                                    mb="16px"
                                    maxW="428px"
                                    w="100%"
                                    mx={{md: "0", base: "auto"}}
                                >
                                  Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam.
                                </Text>
                                <Text
                                    color="#8C89A0"
                                    fontSize="12px"
                                    fontFamily="Poppins"
                                    lineHeight="140.8%"
                                    letterSpacing="0.36px"
                                    opacity="60%"
                                    mb="16px"
                                >
                                    © 2023, Enkigroup. All rights reserved. 
                                </Text>
                            </Box>
                            <Box w={{md: "50%", base: "100%"}} px="10px" mb="16px">
                                <Flex mx="-10px">
                                    <Flex w="33.33%" flexDirection="column" alignItems={{md: "flex-start", base: "center"}} px="10px">
                                        <FooterMenuLink linkText="Home" linkUrl="/home" />
                                        <FooterMenuLink linkText="About Enki" linkUrl="/about" />
                                        <FooterMenuLink linkText="Business" linkUrl="/business" />
                                    </Flex>
                                    <Flex w="33.33%" flexDirection="column" alignItems={{md: "flex-start", base: "center"}} px="10px">
                                        <FooterMenuLink linkText="Approach" linkUrl="/approach" />
                                        <FooterMenuLink linkText="Our Team" linkUrl="/team" />
                                        <FooterMenuLink linkText="Investor" linkUrl="/investor" />
                                    </Flex>
                                    <Flex w="33.33%" flexDirection="column" alignItems={{md: "flex-start", base: "center"}} px="10px">
                                        <FooterMenuLink linkText="FAQs" linkUrl="/faq" />
                                        <FooterMenuLink linkText="Press" linkUrl="/press" />
                                        <FooterMenuLink linkText="Contact US" linkUrl="/contact-us" />
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
                <Box borderTop="1px solid rgba(255, 255, 255, 0.15)" py="14px">
                    <Container maxW="1120px" mx="auto" px="20px">
                        <Flex mx="-10px" flexWrap="wrap" alignItems="center">
                            <Flex w={{md: "50%", base: "100%"}} px="10px" mx="-12px" alignItems="center" justifyContent={{md: "flex-start", base:"center"}} flexWrap="wrap"
                                color="rgba(218, 214, 243, 0.60)"
                                fontSize={{sm: "12px", base: "11px"}}
                                fontFamily="Poppins"
                                lineHeight="140.8%"
                                letterSpacing="0.36px"
                                textAlign={{md: "0", base: "center"}}
                            >
                                <Link href="/legal-disclaimer" mb="10px" px="12px">Legal Disclaimer</Link>
                                <Link href="/terms-and-conditions" mb="10px" px="12px">Terms and Conditions</Link>
                                <Link href="/privacy-notice" mb="10px" px="12px">Privacy Notice</Link>
                                <Link href="/cookie-policy" mb="10px" px="12px">Cookie Policy</Link>
                            </Flex>
                            <Box w={{md: "50%", base: "100%"}} px="10px">
                                <Flex alignItems="center" px="-12px" maxW="215px" w="100%" ml="auto" mr={{md: "0", base: "auto"}} justifyContent="space-between">
                                    <Link href="#" px="12px"><Image src="https://cdn.enochdev.com/enki/twitter.png" alt="icon" /></Link>
                                    <Link href="#" px="12px"><Image src="https://cdn.enochdev.com/enki/linkedin.png" alt="icon" /></Link>
                                    <Link href="#" px="12px"><Image src="https://cdn.enochdev.com/enki/youtube.png" alt="icon" /></Link>
                                    <Link href="#" px="12px"><Image src="https://cdn.enochdev.com/enki/telegram.png" alt="icon" /></Link>
                                    <Link href="#" px="12px"><Image src="https://cdn.enochdev.com/enki/m.png" alt="icon" /></Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Footer