import { Box,Text,Image,Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ConsumersTabContent = () => {
  return (
    <Box>
<Flex gap="50px" flexDirection={{base:'column',md:'row'}} mb="60px">
    <Box w={{base:'100%',md:'60%'}}>
    <Heading
           fontFamily="poppins"
            color="#000000"
            fontSize={{base:'22px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight="180%"
            mb={{base:'12px',lg:'24px'}}
            textAlign={{base:'center',md:'left'}}
            fontStyle="italic"
         
          >
 Communications and Social
          </Heading>
          <Text
          maxW={"596px"}
       fontFamily="Montserrat"
             textAlign={{base:"center",md:"left"}}
            color="#000000"
            fontSize={{base:'14px',md:'18px',xl:'24px'}}
            fontWeight="500"
            lineHeight="180%"
          >
     Connecting people is the core of what we do. We develop and provide a wide range of easy to use instant messaging and social networks. Our innovations make communications and sharing more convenient, lively and personal, enriching the lives of our users.
          </Text>
    </Box>
    <Box w={{base:'100%',md:'40%'}} borderLeft={{md: "1px solid rgba(0, 0, 0, 0.20)"}}>
        <Flex h="50%" justifyContent={"center"} alignItems="center" pb="63px" borderBottom={"1px solid rgba(0, 0, 0, 0.20)"}>
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/enochmainlogo.svg"></Image>
        </Flex>
       


    </Box>
</Flex>
<Flex gap="50px" flexDirection={{base:'column-reverse',md:'row'}} mb="60px">
<Box w={{base:'100%',md:'40%'}} borderRight={{md: "1px solid rgba(0, 0, 0, 0.20)"}}>
        <Flex h="50%" justifyContent={{md: "left", base: "center"}} alignItems="center" pb="45px" borderBottom={"1px solid rgba(0, 0, 0, 0.20)"}>
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/sixtyninelogo.svg"></Image>
        </Flex>
        <Flex h="50%" justifyContent={{md: "left", base: "center"}} alignItems="center" pt="45px" >
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/fractallogo.svg"></Image>
        </Flex>
       


    </Box>
    <Box w={{base:'100%',md:'60%'}}>
    <Heading
           fontFamily="poppins"
            color="#000000"
            fontSize={{base:'22px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight="180%"
            mb={{base:'12px',lg:'24px'}}
            textAlign={{base:'center',md:'left'}}
            fontStyle="italic"
         
          >
 Digital Content
          </Heading>
          <Text
          maxW={"596px"}
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'14px',md:'18px',xl:'24px'}}
            fontWeight="500"
            lineHeight="180%"
          >
    On the principle of connecting everything Tencent continues to explore a range of diverse integrated social entertainment offerings that look towards the future. Building upon high-quality content and driven by our technological innovations, We continue to explore the next generation of social and content integration. 
          </Text>
    </Box>
   
</Flex>
<Flex gap="50px" flexDirection={{base:'column',md:'row'}} mb="60px">
    <Box w={{base:'100%',md:'60%'}}>
    <Heading
           fontFamily="poppins"
            color="#000000"
            fontSize={{base:'22px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight="180%"
            mb={{base:'12px',lg:'24px'}}
            textAlign={{base:'center',md:'left'}}
            fontStyle="italic"
         
          >
FinTech Services
          </Heading>
          <Text
          maxW={"596px"}
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'14px',md:'18px',xl:'24px'}}
            fontWeight="500"
            lineHeight="180%"
          >
    Connecting people is the core of what we do. We develop and provide a wide range of easy to use instant messaging and social networks. Our innovations make communications and sharing more convenient, lively and personal, enriching the lives of our users.
          </Text>
    </Box>
    <Box w={{base:'100%',md:'40%'}} borderLeft={{md: "1px solid rgba(0, 0, 0, 0.20)"}}>
        <Flex h="50%" justifyContent={"center"} alignItems="center" pb="63px" borderBottom={"1px solid rgba(0, 0, 0, 0.20)"}>
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/losarnlogs.svg"></Image>
        </Flex>
       


    </Box>
</Flex>
<Flex gap="50px" flexDirection={{base:'column-reverse',md:'row'}} mb="60px">
<Box w={{base:'100%',md:'40%'}} borderRight={{md: "1px solid rgba(0, 0, 0, 0.20)"}}>
        <Flex h="50%" justifyContent={{md: "left", base: "center"}} alignItems="center" pb="45px" borderBottom={"1px solid rgba(0, 0, 0, 0.20)"}>
        <Image
 alt="img" src="https://cdn.enochdev.com/enki/atlantisdrem.svg"></Image>
        </Flex>
        
       


    </Box>
    <Box w={{base:'100%',md:'60%'}}>
    <Heading
           fontFamily="poppins"
            color="#000000"
            fontSize={{base:'22px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight="180%"
            mb={{base:'12px',lg:'24px'}}
            textAlign={{base:'center',md:'left'}}
            fontStyle="italic"
         
          >
Artificial Intelligent
          </Heading>
          <Text
          maxW={"596px"}
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'14px',md:'18px',xl:'24px'}}
            fontWeight="500"
            lineHeight="180%"
          >
   On the principle of connecting everything Tencent continues to explore a range of diverse integrated social entertainment offerings that look towards the future. Building upon high-quality content and driven by our technological innovations We continue to explore the next generation of social and content integration. 
          </Text>
    </Box>
   
</Flex>
    </Box>
  )
}

export default ConsumersTabContent