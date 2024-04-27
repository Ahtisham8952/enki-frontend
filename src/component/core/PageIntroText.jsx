import { Badge, Box, Flex, Heading, Text, } from "@chakra-ui/react"

const PageIntroText = ({pageTitle, pragraph}) => {
    return (
        <>
            <Box maxW={{xxl: "1125px", xl: "950px", lg: "800px", md: "600px"}} pr={{xxl : "0px", base: "50px"}} mx="auto">
                <Flex alignItems="flex-end">
                    <Heading
                        fontStyle="italic"
                        fontWeight="700"
                        fontSize={{xxl: "98px", xl: "70px", lg: "50px", md: "40px", base: "32px"}}
                        lineheight="150%"
                        color="#FFFFFF"
                        mb="0px"
                        fontFamily="body"
                        textTransform="uppercase"
                    >
                        {pageTitle}
                    </Heading>
                    <Flex alignItems="center" ml="8px" mb={{xl: "15px", md: "8px", base: "3px"}}>
                        <Badge h={{lg: "12px", md: "10px", base: "8px"}} w={{lg: "12px", md: "10px", base: "8px"}} bg="#5CFF15" borderRadius="50%" mr="8px" />
                        <Badge h={{lg: "12px", md: "10px", base: "8px"}} w={{lg: "12px", md: "10px", base: "8px"}} bg="#5CFF15" borderRadius="50%" mr="8px" />
                        <Badge h={{lg: "12px", md: "10px", base: "8px"}} w={{lg: "12px", md: "10px", base: "8px"}} bg="#5CFF15" borderRadius="50%" mr="8px" />
                    </Flex>
                </Flex>
                <Text
                    fontWeight="400"
                    fontSize={{xxl: "24px", xl: "20px", lg: "18px", md: "16px", base: "14px" }}
                    lineHeight="180%"                    
                    color="#FFFFFF"
                    mt="40px"
                    fontFamily="Montserrat"
                >
                    {pragraph}
                </Text>
            </Box>
        </>
    )
}

export default PageIntroText
