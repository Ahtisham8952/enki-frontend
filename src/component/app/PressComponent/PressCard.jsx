import { Box, Flex, Grid, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'
const PressNews = [
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage1.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage2.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage3.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage4.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage5.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage6.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage7.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage8.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
  {
    avater: "https://cdn.enochdev.com/enki/avater.png",
    avaterUrl: "#",
    Image: 'https://cdn.enochdev.com/enki/pressimage9.png',
    Date: ' July 12, 2023',
    Heading: 'News Heading will come here can come in two lines',
  },
]
const PressCard = () => {
  return (
    <>

      <Grid gap="24px" templateColumns={{ base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', md: "repeat(3, 1fr)", lg: 'repeat(3, 1fr)' }} w="100%">
        {
          PressNews.map((li, Index) => (
            <Box mb="14px" pos="relative">
              <Flex as="a" href={li.avaterUrl} alignItems="center" justifyContent="center" pos="absolute" top="16px" left="16px" zIndex="11" borderRadius="50%" overflow="hidden" border="1px solid #FFF" h="40px" w="40px">
                <Image
 alt="img" src={li.avater} h="100%" w="100%"  />
              </Flex>
              <Link href="press-detail" cursor="pointer">
                <Image
 alt="img" w="100%" src={li.Image}></Image>
              </Link>
              <Flex alignItems={"center"} justifyContent="space-between" my="16px">
                <Flex gap="12px" alignItems={"center"}>
                  <Image
 alt="img" src="https://cdn.enochdev.com/enki/calendatimg.svg"></Image>
                  <Text
                    color="#7C8CA3"
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight={"18px"}
                  >
                    {li.Date}
                  </Text>
                </Flex>
                <Link href="press-detail" cursor="pointer">
                  <Image
 alt="img" src="https://cdn.enochdev.com/enki/arrowroe.svg"></Image>
                </Link>
                
              </Flex>
              <Link href="press-detail" _hover={{color: "#000000"}} cursor="pointer">
                <Text
                color="#000000"
                fontSize="20px"
                fontWeight="700"
                lineHeight={"26px"}
                maxW="334px"
              >
                {li.Heading}
              </Text>
              </Link>

            </Box>

          ))
        }



      </Grid>
    </>
  )
}

export default PressCard