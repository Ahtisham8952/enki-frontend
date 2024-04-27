import { Box,Flex,Grid,Image,Text } from '@chakra-ui/react'
import React from 'react'

const TeamCard = ({TeamCards}) => {
  return (
   <Box >
     <Grid  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)", md: "repeat(3, 1fr)",lg:'repeat(4, 1fr)' }}  w="100%" gap="24px">
   {TeamCards.map((list) => (
<Box bg="#0B254D">
    <Image w="100%" src={list.Photo}></Image>
    <Box p="16px">
    <Text
            mb="4px"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="600"
            lineHeight={"30px"}
          >
       {list.Name}
          </Text>
          <Text
            mb="8px"
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"22px"}
          >
       {list.Profession}
          </Text>
          <Text
            mb="24px"
            color="#C8CDDA"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"22px"}
          >
       {list.Description}
          </Text>
          <Flex>
            <Image mr="16px" src="https://cdn.enochdev.com/pluto-fund/fblogos.svg"></Image>
            <Image src="https://cdn.enochdev.com/pluto-fund/twitterlogis.svg"></Image>

          </Flex>


    </Box>

</Box>
))}
</Grid>

   </Box>
  )
}

export default TeamCard