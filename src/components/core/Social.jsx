import { Box, ListItem,
    UnorderedList, Link, Image } from '@chakra-ui/react'
import React from 'react'

const Social = () => {
  return (
    <>
      <Box>
        <UnorderedList listStyleType="none" p="0px" ml="0px">
          <ListItem mb="30px"><Link href="#" transition="0.3s" filter="brightness(100)" _hover={{opacity: "0.7", filter: "none"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/tweet.svg"  /></Link></ListItem>
          <ListItem mb="30px"><Link href="#" transition="0.3s" filter="brightness(100)" _hover={{opacity: "0.7", filter: "none"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/be.svg"  /></Link></ListItem>
          <ListItem mb="30px"><Link href="#" transition="0.3s" filter="brightness(100)" _hover={{opacity: "0.7", filter: "none"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/fb.svg"  /></Link></ListItem>
          <ListItem mb="30px"><Link href="#" transition="0.3s" filter="brightness(100)" _hover={{opacity: "0.7", filter: "none"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/in.svg"  /></Link></ListItem>
          <ListItem mb="30px"><Link href="#" transition="0.3s" filter="brightness(100)" _hover={{opacity: "0.7", filter: "none"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/dribble.svg"  /></Link></ListItem>
        </UnorderedList>
      </Box>
    </>
  )
}

export default Social