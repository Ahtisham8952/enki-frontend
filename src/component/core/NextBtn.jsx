import { Flex, Image, Box } from "@chakra-ui/react"
import React, { useState } from 'react'
const NextBtn = ({ url }) => {
  const [isHover, setisHover] = useState(false);
  const handleMouseEnter = () => {
    setisHover(true);
  };

  const handleMouseLeave = () => {
    setisHover(false);
  };
  return (
    <>
      <Flex as="a" cursor="pointer" zIndex="111" href={url} alignItems="flex-start" justifyContent="center" h={{ lg: "80px", md: "70px", base: "60px" }} w={{ lg: "80px", md: "70px", base: "60px" }} p={{ lg: "25px", md: "20px", base: "16px" }} border="2px solid #45398C" borderRadius="50%" position="fixed" bottom={{ lg: "40px", base: "20px" }} right={{ xl: "80px", lg: "40px", base: "20px" }} transition=".35s ease-in-out" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src="/downarrow.svg" alt="icon" h={!isHover ? ("16px") : ("20px")} transition=".35s ease-in-out" />
        <Box
          as="span"
          position="absolute"
          right={{md: "22px", base: "18px"}}
          bottom={{lg: "-26px", md: "-24px", base: "-20px"}}
          h="100%"
          display="flex"
          alignItems="center"
        >
          <Image
            src="/rightthumb.svg"
            alt="enki"
            h="50%"
            transform={{lg: "rotate(88deg)", base: "rotate(90deg)"}}
          />
        </Box>
      </Flex>
    </>
  )
}

export default NextBtn
