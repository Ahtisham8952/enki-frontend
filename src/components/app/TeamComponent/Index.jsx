import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import TeamCard from './TeamCard'
const TeamData=[
    {
        Photo:'https://cdn.enochdev.com/pluto-fund/Teamphto.png',
        Name:'Jocelyn Schleifer',
        Profession:'Software Engineer',
        Description:'There are many variations of passages of Lorem Ipsum available',

    },
    {
        Photo:'https://cdn.enochdev.com/pluto-fund/Teamphto.png',
        Name:'Jocelyn Schleifer',
        Profession:'Software Engineer',
        Description:'There are many variations of passages of Lorem Ipsum available',

    },
    {
        Photo:'https://cdn.enochdev.com/pluto-fund/Teamphto.png',
        Name:'Jocelyn Schleifer',
        Profession:'Software Engineer',
        Description:'There are many variations of passages of Lorem Ipsum available',

    },
    {
        Photo:'https://cdn.enochdev.com/pluto-fund/Teamphto.png',
        Name:'Jocelyn Schleifer',
        Profession:'Software Engineer',
        Description:'There are many variations of passages of Lorem Ipsum available',

    },
]
const TeamComp = () => {
  return (
    <Box bg="linear-gradient(180deg, #070332 0%, #050038 100%)">

  
<Box maxW={"1652px"} w="100%" px="20px" py="60px"  mx="auto">
    <Flex gap="100px" alignItems={"center"} flexDirection={{base:'column',lg:'row'}} mb="50px">
        <Box> 
        <Text
            
            color="#FFE999"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"36px"}
            letterSpacing="0.2em"
            textTransform={"uppercase"}
            
          >
      TEAM
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize={{base:'30px',md:'40px',lg:'50px',xl:'72px'}}
            fontWeight="800"
            lineHeight={{base:'50px',md:'60px',lg:'90px',xl:'110px'}}
            
            
          >
      We work together
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize="16px"
            fontWeight="400"
            lineHeight={"24px"}
            maxW="766px"
            
            
          >
     Plutofund is a research-driven technology investment firm. We invest in, build, and contribute to companies and protocols with as little as $1M and as much as $100M+. We often get involved at the earliest stages and continue to support our portfolio companies over time.
          </Text>
        </Box>
        <Image src="https://cdn.enochdev.com/pluto-fund/Heartimages.svg"></Image>
    </Flex>
    <Box>
        <TeamCard TeamCards={TeamData}/>
    </Box>
    <Box my="80px">
        <Image src="https://cdn.enochdev.com/pluto-fund/teambans.png"></Image>

    </Box>

</Box>
</Box>
  )
}

export default TeamComp