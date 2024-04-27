import { Box, Flex, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import Back from "../../core/Back";
import ContainerWrapper from "../../core/ContainerWrapper";
import Header from "../../core/Header";
import BreadCrumbs from "../../core/BreadCrumbs";
import HeroSection from "../AboutUsComponent/HeroSection";
import Footer from "../../core/Footer/Footer";
import { Button } from "./ChartBox";
import CorporateChart from "./CorporateChart";

const CorporateStructureDetail = () => {
  return (
    <>
      <Header
        logoUrl="/blak-logo.png"
        barBg1="#252525"
        barBg2="rgba(37, 37, 37, 0.8)"
        barBg3="rgba(37, 37, 37, 0.4)"
      />
      <ContainerWrapper>
        <Back
          imgUrl="/dark-back.svg"
          url="/corporate-structure"
        />

        <BreadCrumbs
          PageLink="/corporate-structure"
          PageName=" CorporateStructure"
        />
        <HeroSection
          Text1="Corporate Structure"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
        />
         <Box maxW={"1201px"} mx="auto" mb={{base:'0px',lg:'171px'}}>
          <Flex alignItems={"center"} gap="17px" mb="10px">
            <Image src="/dotlines.svg"></Image>
            <Text
            
            color="#2B3041"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Equity interest (100% unless otherwise specified)
          </Text>
          </Flex>
          <Flex alignItems={"center"} gap="17px">
            <Image src="/doubledots.svg"></Image>
            <Text
            
            color="#2B3041"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Contractual Arrangement 
          </Text>
          </Flex>
         </Box>
<Box maxW={"1371px"} w="100%" mx="auto">

<Box 

>
<CorporateChart/>
</Box>
       
       <Box pb="69px">
       <UnorderedList>
  <ListItem 
    color="#2B3041"
    fontSize="14px"
    fontWeight="500"
    lineHeight={"16px"}>The above diagram illustrates our corporate structure, </ListItem>
 
</UnorderedList>
<Text 
pl="15px"
    color="#2B3041"
    fontSize="14px"
    fontWeight="500"
    lineHeight={"16px"}>
      
including our principle subsidiaries and our VIE, as of the date: August 5th 2023. </Text>

       </Box>
        </Box>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default CorporateStructureDetail;
