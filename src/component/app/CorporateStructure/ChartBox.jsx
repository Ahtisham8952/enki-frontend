import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const ChartBox = ({bgCol,Name,Border}) => {
  return (
    <Box
      bgColor={bgCol}
     border={Border}
      borderRadius="40px"
      textAlign={"center"}
      px={{base:'10px',md:'16px',lg:'44px',xl:'30px',xxl:'44px'}}
      py="1px"
     
    >
      <Text
       color="#000000"
        fontSize={{base:'8px',sm:'8px',md:'8px',lg:'10px',xl:'14px',xxl:'18px'}}
        lineHeight={{base:'20px',sm:'44px',md:'44px',lg:'44px',xl:'44px',xxl:'44px'}}
        fontWeight="600"
        fontFamily="montserrat"
      >
       {Name}
      </Text>
    </Box>
  );
};
