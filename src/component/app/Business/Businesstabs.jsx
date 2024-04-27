import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import ConsumersTabContent from './ConsumersTabContent'
import InovationTabContent from './InovationTabContent'
const Businesstabs = () => {
  return (
   <Box>
    <Tabs>
  <TabList borderBottom={"none"} gap="48px" mb={{base:'30px',md:'45px',lg:'60px',xl:'95px'}}>
    <Tab _selected={{fontWeight:'700',borderBottom:"2px solid #5CFF15"}}  color="#2B3041" fontFamily={"Montserrat"} fontSize="16px"fontWeight="500"lineHeight={"22px"} fontStyle="italic">Consumers</Tab>
    <Tab _selected={{fontWeight:'700',borderBottom:"2px solid #5CFF15"}}  color="#2B3041" fontFamily={"Montserrat"} fontSize="16px"fontWeight="500"lineHeight={"22px"} fontStyle="italic">Innovation</Tab>
  
  </TabList>

  <TabPanels p="0px">
    <TabPanel p="0px">
     <ConsumersTabContent/>
    </TabPanel>
    <TabPanel p="0px">
      <InovationTabContent/>
    </TabPanel>
   
  </TabPanels>
</Tabs>
   </Box>
  )
}

export default Businesstabs