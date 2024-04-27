import React from 'react'
import InovationItem from './InovationItem'
import { Box } from '@chakra-ui/react'

const InovationData = [
    {
        itemTitle: 'Artificial Intelligence',
        itemDetails: 'Enki is applying our diverse technological assets, including computing power, massive data sets, and a broad range of use cases to improve our AI capabilities in understanding, decision-making and creation, and to help bring the benefits of AI to everyone, everywhere.', 
        itemImg: "https://cdn.enochdev.com/enki/item1.webp",
    },
    {
        itemTitle: 'WEB 3.0 Technology',
        itemDetails: 'Enki is applying our diverse technological assets, including computing power, massive data sets, and a broad range of use cases to improve our AI capabilities in understanding, decision-making and creation, and to help bring the benefits of AI to everyone, everywhere.', 
        itemImg: "https://cdn.enochdev.com/enki/item2.webp",
    },
    {
        itemTitle: 'Exploring the Future',
        itemDetails: 'Enki is applying our diverse technological assets, including computing power, massive data sets, and a broad range of use cases to improve our AI capabilities in understanding, decision-making and creation, and to help bring the benefits of AI to everyone, everywhere.', 
        itemImg: "https://cdn.enochdev.com/enki/item3.webp",
    },
]

const InovationTabContent = () => {
  return (
    <>
        <Box>
              {InovationData.map((info) => {
                  return (
                    <InovationItem data={info}/>    
                  );
              })}
            
        </Box>
    </>
  )
}

export default InovationTabContent