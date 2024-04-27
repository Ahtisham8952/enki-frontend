import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Flex,
    Text,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
const FaqAccordian = ({Question,Answer}) => {
  return (
    <Accordion allowMultiple>
   
  
    <AccordionItem borderTop={"3px solid #D7DEF0"} >

      {({ isExpanded }) => (
        <>
       
            <AccordionButton  borderRadius={"4px"}  py='24px'   _hover={{bg:"transparent"}} >
              <Box as="span" flex='1' textAlign='left'>
               <Flex >
               
                <Text
            
            color="#000000"
            fontSize={{base:'14px',lg:'16px',xl:'20px'}}
            fontWeight="600"
            lineHeight={"22px"}
          >
     {Question}
          </Text>
               </Flex>
              </Box>
              {isExpanded ? (
                <Image  src="https://cdn.enochdev.com/enki/crossicon.svg"></Image>
              ) : (
               <Image  src="https://cdn.enochdev.com/enki/plusixonfig.svg"></Image>
              )}
            </AccordionButton>
          
          <AccordionPanel pb={4}>
          {Answer}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
  )
}

export default FaqAccordian