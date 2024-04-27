import {
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Link,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/menu-icon.svg"  maxW={{lg: "auto", base: "45px"}} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" position="relative" zIndex="99999" h="100vh" />
        <DrawerContent bg="linear-gradient(180deg, #070332 0%, #050038 100%)" h="100vh" overflow="hidden" minW="100%" position="relative" zIndex="99999">
          <Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/menu-isolation.svg"  maxW="50%" position="absolute" zIndex="1" bottom="0px" right="0px" />
          <DrawerCloseButton color="#FFFFFF" fontSize="20px" position="absolute" top="30px" right="30px" zIndex="2" />
          <DrawerBody>
            <Flex>
              <UnorderedList listStyleType="none" p="0px" display="flex" alignItems="flex-start" justifyContent="space-between" flexDirection="column" h="98vh" overflow="hidden" py="5%" 
                fontWeight="600"
                fontSize={{xl: "40px", lg: "36px", md: "32px", base: "28px"}}
                lineHeight="60px"
                color="#FFFFFF"
              >
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Mission</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Who we are</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Technology</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Portfolio</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Team</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Faq</Link></ListItem>
                <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>Contact</Link></ListItem>
              </UnorderedList>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
