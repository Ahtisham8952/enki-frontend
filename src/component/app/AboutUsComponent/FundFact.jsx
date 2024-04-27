import { Box, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";

const FundFact = () => {
  return (
    <Box
      bgImage="url('https://cdn.enochdev.com/enki/blue_bg.webp')"
      bgSize="cover"
      bgPosition="top-center"
      bgRepeat="no-repeat"
      pt={{xl: "99px", lg: "50px", md: "30px", base: "10px"}}
      pb={{xl: "99px", lg: "50px", md: "40px", base: "30px"}}
    >
      <Box maxW={"1040px"} px="20px" mx="auto">
        <Text
          color="#FFFFFF"
          fontSize={{
            base: "28px",
            md: "30px",
            lg: "32px",
            xl: "40px",
            xxl: "52px",
            xxl: "64px",
          }}
          fontWeight="700"
          mb="30px"
          fontStyle={"italic"}
          lineHeight={"72px"}
        >
          Fund Facts.
        </Text>

        <Grid
          gap="32px"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          w="100%"
        >
          <Box>
            <Image
 alt="img"
           
              w="100%"
              src="https://cdn.enochdev.com/enki/fundimage1.webp"

            ></Image>
          </Box>
          <Box>
            <Text
              color="#FFFFFF"
              fontSize={{xl: "24px", lg: "20px", md: "18px", sm: "16px", base:"14px"}}
              fontWeight="500"
              lineHeight="150%"
            >
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </Text>
            <Box
              mt="20px"
              maxW={"160px"}
              w="100%"
              position={"relative"}
              overflow="visible"
            >
              <Image
 alt="img"
             
                ml="auto"
                src="https://cdn.enochdev.com/enki/roundbar.svg"
              ></Image>
              <Box
                position="absolute"
                top="50%"
                left="50%"
                textAlign="left"
                transform="translate(-49%, -50%)"
                color="white"
                fontSize="16px"
                w="100%"
              >
                VIEW ALL FACTS
              </Box>
            </Box>
          </Box>
          <Box>
            <Image
 alt="img"
              w="100%"
              src="https://cdn.enochdev.com/enki/fundimage2.webp"
            ></Image>
          </Box>

          <Box mt={{ base: "0px", md: "-32px" }}>
            <Image
 alt="img"
              w="100%"
              src="https://cdn.enochdev.com/enki/fundimage3.webp"
            ></Image>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default FundFact;
