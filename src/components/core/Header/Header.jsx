import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import MobileMenu from "./MobileMenu";

const AppHeader = () => {
  return (
    <>
      <Box position="relative" zIndex="99999" h="135px">
        <Box>
          <Container maxW="1710px" mx="auto" px="20px">
            <Flex w="100%" alignItems="center" justifyContent="space-between" pt={{xl: "95px", base: "50px"}}>
              <Link href="#" maxW={{md: "233px", base: "170px"}}>
                <Image src="https://cdn.enochdev.com/pluto-fund/pluto-logo.svg" alt="logo" />
              </Link>
              <Box position="absolute" top={{lg: "50px", base: "40px"}} right={{lg: "40px", base: "30px"}} zIndex="11">
                <MobileMenu />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AppHeader;
