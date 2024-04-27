import { Link, Flex, Text, Badge, Box, } from '@chakra-ui/react'
import React, {useState} from 'react'

const SideMenuItem = ({linkText, link}) => {
    const [isHover, setisHover] = useState(false);
    const handleMouseEnter = () => {
        setisHover(true);
      };
    
      const handleMouseLeave = () => {
        setisHover(false);
      };
    return (
        <>
            <Link href={link} mb={{lg: "30px", md: "20px", base: "16px"}} display="flex" cursor="pointer" _hover={{textDecoration: "none"}} transition="1s ease-in-out" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Flex w="auto" overflow="hidden" alignItems="center" justifyContent="flex-end" ml="auto">
                    <Text
                        fontWeight="600"
                        fontSize="20px"
                        lineHeight="16px"
                        textAlign="right"
                        color="#FFFFFF"
                        mr="15px"
                        transition="1s ease-in-out"
                        opacity={!isHover ? ("0"):("1")}
                    >
                        {linkText}
                    </Text>
                    <Flex p="9px" w="24px" bg={!isHover ? ("transparenrt"):("#5CFF15")} alignItems="center" justifyContent="center" borderRadius="50%" transition="1s ease-in-out"> 
                        <Badge bg="#5CFF15" minH="6px" minW="6px" borderRadius="50%" />
                    </Flex>
                </Flex>
            </Link>
        </>
    )
}

export default SideMenuItem
