import { Link, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TeamMenuLink = ({data}) => {
    return (
        <>
            <Link href="/team/team-details" _hover={{color: "#FFFFFF"}}>
                <Flex alignItems={{lg: "center", base: "flex-start"}} flexDirection={{lg: "row", base: "column"}}>
                    <Heading mr="20px" mb="0px"
                        fontWeight="600"
                        fontSize={{xxl: "6.5vh", xl: "4.5vh", lg: "4vh", md: "40px", sm: "28px", base: "22px" }}
                        lineHeight="180%"
                        color="#FFFFFF"
                        fontFamily="body"
                    >
                        {data?.name}
                    </Heading>
                    <Text
                        fontWeight="500"
                        fontsize={{md: "16px", sm: "14px", base: "12px"}}
                        lineheight="20px"
                        color="#FFFFFF"
                        fontFamily="body"
                    >
                        {data?.designation}
                    </Text>
                </Flex>
            </Link>
        </>
    )
}

export default TeamMenuLink