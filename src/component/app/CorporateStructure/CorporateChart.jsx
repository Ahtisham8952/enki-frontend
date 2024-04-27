import { Box,Flex,Image,Text, } from '@chakra-ui/react'
import React from 'react'
import { ChartBox } from './ChartBox'

const CorporateChart = () => {
  return (
   

    
    <Box flexDirection={{base:'column',lg:'row'}} display="flex" py="100px"  gap="16px" mb="200px" >
 
    <Box
     w={{base:'100%',lg:'33%'}}
    > 
    <Flex alignItems={"center"} gap="10px" pt={{base:'0px',lg:'230px'}}>
    <ChartBox bgCol="#5CFF15" Name="Enki Group Ltd (Cayman) " Border="none" />
    <Image
 alt="img" src="/coreline.svg"></Image>
    </Flex>
     
    </Box>
    <Box  w={{base:'100%',lg:'67%'}}  h="1467px" borderLeft={{base:'none',md:'1px solid #D0D0D0'}}>
      <Flex w="100%" flexDirection={"column"} h="100%" justifyContent={"space-between"}>
        {/* 1st */}
        <Flex gap="16px" mt={{base:'0px',lg:'-127px'}} alignItems={"center"}>
          <Box w="35%" >
          <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" display={{base:'none',md:'block'}} src="/dotlines.svg"></Image>
    <ChartBox bgCol="#F7FFF0" Name="369 Ltd (Cayman)  " Border="1px solid #47DD44" />
   
    </Flex>
          </Box>
          <Flex alignItems={"center"}  w="65%">
        <Box w={{base:'20px',md:'40px',xl:'78px'}} h='1px' bg="#D0D0D0">

        </Box>
        <Box
    
     borderLeft={"1px solid #D0D0D0"} h="256px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
      
      <Flex alignItems={"center"} gap="10px" mt={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="369 Ltd  (UK)  " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="369  LLC  (US)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" >
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="369 OÜ  (EE)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" mb={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="369 PTE Ltd  (SG)   " Border="1px solid #44DDD4" />
   
    </Flex>
    </Box>
    
      </Flex>
    
        </Flex>
 {/* 2nd */}
        <Flex gap="16px" alignItems={"center"}>
          <Box w="38%" >
          <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" display={{base:'none',md:'block'}}  src="/dotlines.svg"></Image>
    <ChartBox bgCol="#F7FFF0" Name="Lusarn Ltd (Cayman)  " Border="1px solid #47DD44" />
   
    </Flex>
          </Box>
          <Flex alignItems={"center"}  w="62%">
        <Box w={{base:'20px',md:'40px',xl:'78px'}} h='1px' bg="#D0D0D0">

        </Box>
        <Box
    
     borderLeft={"1px solid #D0D0D0"} h="256px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
      
      <Flex alignItems={"center"} gap="10px" mt={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Lusarn Ltd  (UK)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Lusarn  LLC  (US)  " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" >
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Lusarn OÜ  (EE)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" mb={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Lusarn PTE Ltd  (SG)   " Border="1px solid #44DDD4" />
   
    </Flex>
    </Box>
    
      </Flex>
    
        </Flex>
        {/* 3rd */}
        <Flex gap="16px" alignItems={"center"}>
          <Box w="45%" >
          <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" display={{base:'none',md:'block'}} src="/dotlines.svg"></Image>
    <ChartBox bgCol="#F7FFF0" Name="Fractal World  Ltd (Cayman)   " Border="1px solid #47DD44" />
   
    </Flex>
          </Box>
          <Flex alignItems={"center"}  w="54%">
        <Box w={{base:'20px',md:'40px',xl:'78px'}} h='1px' bg="#D0D0D0">

        </Box>
        <Box
    
     borderLeft={"1px solid #D0D0D0"} h="256px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
      
      <Flex alignItems={"center"} gap="10px" mt={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Fractal World Ltd  (UK)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Fractal World  LLC  (US)  " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" >
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Fractal World OÜ  (EE)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" mb={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Fractal World PTE Ltd  (SG)   " Border="1px solid #44DDD4" />
   
    </Flex>
    </Box>
    
      </Flex>
    
        </Flex>
          {/* 4rth */}
        <Flex gap="16px" alignItems={"center"}>
          <Box w="46%" >
          <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" display={{base:'none',md:'block'}} src="/dotlines.svg"></Image>
    <ChartBox bgCol="#F7FFF0" Name="Atlantis Engine Ltd  (Cayman)   " Border="1px solid #47DD44" />
   
    </Flex>
          </Box>
          <Flex alignItems={"center"}  w="53%">
        <Box w={{base:'20px',md:'40px',xl:'78px'}} h='1px' bg="#D0D0D0">

        </Box>
        <Box
    
     borderLeft={"1px solid #D0D0D0"} h="256px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
      
      <Flex alignItems={"center"} gap="10px" mt={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Atlantis Engine  Ltd  (UK)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Atlantis Engine   LLC  (US)  " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" >
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Atlantis Engine  OÜ  (EE)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" mb={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Atlantis Engine  PTE Ltd  (SG)   " Border="1px solid #44DDD4" />
   
    </Flex>
    </Box>
    
      </Flex>
    
        </Flex>
         {/* 5th */}
       
         <Flex gap="16px" mb='-127px' alignItems={"center"}>
          <Box w="48%" >
          <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" display={{base:'none',md:'block'}} src="/dotlines.svg"></Image>
    <ChartBox bgCol="#F7FFF0" Name="Enoch Enterprise Ltd  (Cayman)   " Border="1px solid #47DD44" />
   
    </Flex>
          </Box>
          <Flex alignItems={"center"}  w="52%">
        <Box w={{base:'20px',md:'40px',xl:'78px'}} h='1px' bg="#D0D0D0">

        </Box>
        <Box
    
     borderLeft={"1px solid #D0D0D0"} h="256px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} >
      
      <Flex alignItems={"center"} gap="10px" mt={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Enoch  Ltd  (UK)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px">
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Enoch   LLC  (US)  " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" >
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Enoch  OÜ  (EE)   " Border="1px solid #44DDD4" />
   
    </Flex>
    <Flex alignItems={"center"} gap="10px" mb={{base:'0px',sm:'-24px'}}>
    <Image
 alt="img" src="/dotlines.svg"></Image>
    <ChartBox bgCol="transparent" Name="Enoch  PTE Ltd  (SG)   " Border="1px solid #44DDD4" />
   
    </Flex>
    </Box>
    
      </Flex>
    
        </Flex>
      
  

      </Flex>
      
      
      
    

    </Box>
    
    
  </Box>
  

  )
}

export default CorporateChart