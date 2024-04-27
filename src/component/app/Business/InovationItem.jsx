import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'

const InovationItem = ({data}) => {
  return (
    <>
      <Box mb="80px">
        <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
            <Heading
                mb="24px"
                color="#000"
                fontSize={{xl: "40px", lg: "32px", md: "24px", base: "18px"}}
                fontFamily="body"
                fontStyle="italic"
                fontWeight="700"
                lineHeight="100%"
                mr="10px"
            >
                {data?.itemTitle}
            </Heading>
            <Link mb="24px"><Image src="https://cdn.enochdev.com/enki/blue-arrow.png" alt="icon" /></Link>
        </Flex>
        <Text
            color="#2B3041"
            fontSize={{xl: "24px", lg: "20px", md: "18px", base: "14px"}}
            fontFamily="Montserrat"
            fontWeight="500"
            lineHeight="180%"
            mb={{lg: "32px", base: "24px"}}
        >
            {data?.itemDetails}
        </Text>
        <Box>
            <Image src={data?.itemImg} alt="img" w="100%" />
        </Box>
      </Box>
    </>
  )
}

export default InovationItem