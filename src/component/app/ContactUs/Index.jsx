import { Box, Button, Flex, FormLabel, Grid, Heading, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React, {useState} from 'react'
import Back from '../../core/Back'
import ContainerWrapper from '../../core/ContainerWrapper'
import Header from '../../core/Header'
import BreadCrumbs from '../../core/BreadCrumbs'

import HeroSection from '../AboutUsComponent/HeroSection'
import CustomLabelInput from './CustomLabelInput'
import SelectSubjectRadio from './SelectSubjectRadio'
import Footer from '../../core/Footer/Footer'
const SubjectName = [
  {
    id: "1",
    text: 'Funding',

  },
  {
    id: "2",
    text: 'Partnership',


  },
  {
    id: "3",
    text: 'Invest',
  },
  {
    id: "4",
    text: 'Sponsor',
  },
  {
    id: "5",
    text: 'Volunteer',


  },
  {
    id: "6",
    text: 'Privacy',
  },
  {
    id: "7",
    text: 'Others',
  },

];
const ConatctUsMain = () => {
    const [isFocused, setIsFocused] = useState(false);

const handleFocus = () => {
  setIsFocused(true);
};

const handleBlur = () => {
  setIsFocused(false);
};
  return (
    <>
      <Header logoUrl="/blak-logo.png" barBg1="#252525" barBg2="rgba(37, 37, 37, 0.8)" barBg3="rgba(37, 37, 37, 0.4)" />
      <ContainerWrapper>
        <Back imgUrl="/dark-back.svg" url="/contact-us" />

        <BreadCrumbs PageLink="/contact-us" PageName=" Contact Us" />
        <HeroSection

          Text1="Contact us"

          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
        />
        <Box maxW={"1080px"} width="100%" mx="auto" >
          <Box bg="white" boxShadow="0px 0px 20px rgba(165, 171, 182, 0.15)" borderRadius={"4px"} pt="72px" px={{ base: '20px', md: '40px' }} pb="44px">
            <Grid gap="24px" templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: 'repeat(3, 1fr)' }} w="100%">
              <CustomLabelInput Label="First Name" PlaceHold="First Name" />
              <CustomLabelInput Label="Last Name" PlaceHold="Last Name" />
              <CustomLabelInput Label="Email" PlaceHold="Your email address" />
              <CustomLabelInput Label="Phone Number" PlaceHold="Enter Phone Number with Country code" />
              <CustomLabelInput Label="Company Name" PlaceHold="Enter your company name" />
              <CustomLabelInput Label="Designation" PlaceHold="Your designation or role" />

            </Grid>
            <Box>
              <Text

                color="#000000"
                fontSize="14px"
                fontWeight="600"
                lineHeight={"20px"}
                fontFamily="Montserrat"
                mb="14px"
              >
                Select Subject?
              </Text>
              <SelectSubjectRadio Subject={SubjectName} />
            </Box>
            <Box mb="40px">
              <Text
                color={!isFocused ? ("#000000") : ("#8D8D8D")}
                fontSize="12px"
                fontWeight="500"
                lineHeight={"20px"}
                fontFamily="Montserrat"
                mb="0px"
              >
                Message
              </Text>
              <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='Write your message..'
                px="0px" border="none" borderRadius={"0px"} _focusVisible={{ bg: 'none' }} _hover={{ borderColor: "auto" }} borderBottom={!isFocused ? ("1px solid #8D8D8D") : ("1px solid #000000")} />
            </Box>
            <Flex justifyContent={"flex-end"} position="relative">
              <Box position={"absolute"} right="20%" bottom={"-38%"} zIndex="999">
                <Image src="https://cdn.enochdev.com/enki/arrowsgoesvild.svg"></Image>
              </Box>
              <Button bg="#252525" colorScheme={"#252525"}
                color="#FFFFFF"
                fontSize="16px"
                fontWeight="500"
                lineHeight={"150%"}
                p="15px 48px"
                h="54px"
                borderRadius={"2px"}

              >
                Send Message
              </Button>
            </Flex>

          </Box>

        </Box>
        {/* <Box maxW={"1080px"} width="100%" mx="auto">
  <Flex justifyContent={"center"} alignItems="center">
    <Box>
<Image mx={"auto"} src="https://cdn.enochdev.com/enki/thankslater.svg"></Image>
<Box>
<Text
            
            color="#000000"
            fontSize="24px"
            fontWeight="600"
            lineHeight={"56px"}
            fontStyle="italic"
            fontFamily={"poppins"}
            my="22px"
          >
      Thank you for contacting us, We will get back to you soon.
          </Text>
</Box>
<Flex justifyContent={"center"} >
       
    <Button bg="#252525" colorScheme={"#252525"} 
     color="#FFFFFF"
     fontSize="16px"
     fontWeight="500"
     lineHeight={"150%"}
     p="15px 48px"
     h="54px"
     borderRadius={"2px"}
    
     >
       Back to Home
     </Button>
    </Flex>
    </Box>
  </Flex>

 </Box> */}


      </ContainerWrapper>
      <Footer />

    </>
  )
}

export default ConatctUsMain