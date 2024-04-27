import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const TeamCard = ({imgUrl}) => {
  return (
    <>
      <Box w={{md: "25%", base: "50%" }} px={{lg: "10px", base: "7px"}} py={{lg: "10px", base: "7px"}} position="relative">
        <Box position="absolute" zIndex="11" bg="radial-gradient(30.74% 93.03% at 67.26% 60.74%, #130048 0%, #050827 100%)" opacity="0.7" top="0px" left="0px" h="100%" w="100%"/>
        <Image src={imgUrl} alt="img" w="100%" h="100%" objectFit="cover" position="relative" zIndex="0" />
      </Box>
    </>
  )
}

export default TeamCard