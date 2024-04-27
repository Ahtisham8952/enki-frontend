import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../../core/BreadCrumbs";
import Header from "../../core/Header";
import ContainerWrapper from "../../core/ContainerWrapper";
import Back from "../../core/Back";
import Footer from "../../core/Footer/Footer";


const PressDetail = () => {
  return (
    <>
    <Box>
    <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)"/>
    <ContainerWrapper>
    <Back imgUrl="/dark-back.svg" url="/faqs" />
      <Box bg="white" pb="100px">
        <BreadCrumbs PageLink="/press" PageName=" Press" />

        <Box mt="30px">
          <Image
 alt="img" src="https://cdn.enochdev.com/enki/detailbanner.png"></Image>
          <Flex gap="12px" alignItems={"center"} mt="27px">
            <Image
 alt="img" src="https://cdn.enochdev.com/enki/calendatimg.svg"></Image>
            <Text
              color="#7C8CA3"
              fontSize="16px"
              fontWeight="600"
              lineHeight={"18px"}
            >
              July 12, 2023
            </Text>
          </Flex>
          <Box mt="32px" mb="40px">
            <Heading
              color="#000000"
              fontSize={{base:'20px',md:'24px',lg:'28px',xl:'32px',xxl:'40px'}}
              fontWeight="700"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
              fontStyle="italic"
              mb="24px"
            >
              News Heading will come here
            </Heading>
            <Text
              color="#000000"
              fontSize={{base:'16px',md:'18px',lg:'24px'}}
              fontWeight="400"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
              mb="20px"
            >
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.Forem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
              a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar.
            </Text>
            <Text
              color="#000000"
              fontSize={{base:'16px',md:'18px',lg:'24px'}}
              fontWeight="400"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
            >
              Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
              Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
              amet lacinia. Aliquam in elementum tellus.
            </Text>
          </Box>
          <Flex gap="40px" w="100%" mb="33px" flexDirection={{base:'column',lg:'row'}}>
            <Box w={{base:'100%',lg:'40%'}}>

            
          <Image
 alt="img" w="100%" h="100%" objectFit="cover" src="https://cdn.enochdev.com/enki/presdet2.png"></Image>
          </Box>
          <Box w={{base:'100%',lg:'60%'}}>
          <Heading
              color="#000000"
              fontSize={{base:'20px',md:'24px',lg:'28px',xl:'32px',xxl:'40px'}}
              fontWeight="700"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
              fontStyle="italic"
              mb="24px"
            >
              News Heading will come here
            </Heading>
            <Text
              color="#000000"
              fontSize={{base:'16px',md:'18px',lg:'24px'}}
              fontWeight="400"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
              mb="20px"
            >
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.Forem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
              a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar.
            </Text>
          </Box>
          </Flex>
          <Box>
          <Text
              color="#000000"
              fontSize={{base:'16px',md:'18px',lg:'24px'}}
              fontWeight="400"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
              mb="20px"
            >
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.Forem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
              a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar.
            </Text>
            <Text
              color="#000000"
              fontSize={{base:'16px',md:'18px',lg:'24px'}}
              fontWeight="400"
              lineHeight={{base:'22px',md:'26px',lg:'30px',xl:'34px',xxl:'42px'}}
            >
              Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
              Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
              amet lacinia. Aliquam in elementum tellus.
            </Text>
          </Box>
        </Box>
      </Box>
      </ContainerWrapper>
      <Footer/>
      </Box>
    </>
  );
};

export default PressDetail;
