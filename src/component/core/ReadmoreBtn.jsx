import { Link, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
const ReadmoreBtn = ({ url }) => {
  return (
    <>
      <Link href={url} position="fixed" zIndex="111" left={{xl: "80px", lg: "40px", base: "20px"}} bottom={{lg: "40px", base: "20px"}} z="9" _hover={{color: "#FFF"}}>
        <Flex
          h={{xl: "108px", base: "92px"}}
          w={{xl: "108px", base: "92px"}}
          alignItems="center"
          justifyContent="center"
          border="2px solid #332A6A"
          borderRadius="50%"
          fontFamily="montserrat"
          fontWeight="600"
          fontSize={{xl: "12px", base: "10px"}}
          lineHeight="16px"
          textAlign="center"
          color="#FFFFFF"
          p="12px"
          cursor="pointer"
          position="relative"
        >
          <Box
            as="span"
            position="absolute"
            right="-3px"
            h="100%"
            display="flex"
            alignItems="center"
          >
            <Image
 alt="img"
              src="/rightthumb.svg"
              alt="enki"
              h="50%"
            />
          </Box>
          READ MORE
        </Flex>
      </Link>
    </>
  );
};

export default ReadmoreBtn;
