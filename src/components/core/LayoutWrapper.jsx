import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import AppHeader from "./Header/Header";
import Social from "./Social";

const LayoutWrapper = ({ children }) => {
  return (
    <Box bg="linear-gradient(180deg, #070332 0%, #050038 100%)" minH="100vh" position="relative" zIndex="1" >
      <Image src="https://cdn.enochdev.com/pluto-fund/top-shape.png" alt="shape" position="fixed" top="-30px" left="-50px" zIndex="1" />
      <Box position="fixed" zIndex="111" left="50px" top="50vh">
        <Social/>
      </Box>
      <Box position="relative" zIndex="11">
        <AppHeader/>
        {children}
        <Footer/>
      </Box>
    </Box>
  );
};

export default LayoutWrapper;