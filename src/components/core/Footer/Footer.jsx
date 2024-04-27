import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  Text,
  Heading,
  Badge,
  FormControl,
  Input,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box pt="51px" pb="31px" borderTop="1px solid #EA1075">
        <Container maxW="1710px" mx="auto" px="20px">
          <Flex flexWrap="wrap" alignItems="center">
            <Box w={{md: "50%", base: "100%"}} mb={{md: "0px", base: "40px"}} textAlign={{md: "left", base: "center"}} pr={{md: "20px", base: "0px"}}>
              <Link href="#">
                <Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/pluto-logo.svg"  mx={{md: "0px", base: "auto"}} />
              </Link>
              <Text
                fontWeight="400"
                fontSize="12px"
                lineHeight="16px"
                color="#B9D5DB"
                mb="12px"
                mt="21px"
                maxW="694px"
                w="100%"
                mx={{md: "0px", base: "auto"}}
              >
                Hashed is a team of blockchain experts and builders based in Seoul 
                and Silicon Valley. We back visionary founders and help companies. 
                Subscribe to our quarterly email, The Hashed Playbook.
              </Text>
              <Box maxW="374px" w="100%" mb="18px" mx={{md: "0px", base: "auto"}}>
                <UnorderedList listStyleType="none" p="0px" display="flex" alignItems="center" justifyContent="space-between" ml="0px"
                  w="100%" 
                  fontWeight="600"
                  fontSize={{lg: "20px", md: "18px", base: "16px"}}
                  lineHeight="120%"
                  color="#FFFFFF"
                >
                  <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>docs</Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>help</Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>privacy</Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{textDecoration: "none", opacity: "0.7"}}>terms</Link></ListItem>
                </UnorderedList>
              </Box>
              <Text
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
                color="#C0C0C0"
              >
                © Plutofund copyright
              </Text>
            </Box>
            <Box w={{md: "50%", base: "100%"}} textAlign={{md: "right", base: "center"}}>
              <Text
                fontWeight="600"
                fontSize={{lg: "24px", md: "22px", base: "18px"}}
                lineHeight="36px"
                color="#54ADFF"
              >
                Want to fundraise with us?
              </Text>
              <Link
                fontWeight="600"
                fontSize={{lg: "24px", md: "22px", base: "18px"}}
                lineHeight="36px"
                textSecoration-line="underline"
                color="#EA1075"
              >
                Contact us today
              </Link>
              <Box maxW="284px" ml="auto" mr={{md: "0", base: "auto"}} mt="36px" mb="14px" >
                <UnorderedList listStyleType="none" p="0px" display="flex" alignItems="center" justifyContent="space-between" ml="0px">
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/discord.svg"  /></Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/radit.svg"  /></Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/twiter.svg"  /></Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/chat.svg"  /></Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/telegram.svg"  /></Link></ListItem>
                  <ListItem><Link href="#" transition="0.3s" _hover={{opacity: "0.7"}}><Image
 alt="img" src="https://cdn.enochdev.com/pluto-fund/m.svg"  /></Link></ListItem>
                </UnorderedList>
              </Box>
              <Text display="flex" alignItems="center" flexWrap="wrap" justifyContent={{md: "flex-end", base: "center"}}
                fontWeight="400"
                fontSize="12px"
                lineHeight="140.8%"
                letterSpacing="0.03em"
                color="#F7F7F7"
                maxW="420px"
                mb="-10px"
                ml="auto"
                mr={{md: "0", base: "auto"}}
              >
                <Link ml={{md: "20px", base: "0px"}} mb="10px">Legal Disclaimer</Link>
                <Link ml="20px" mb="10px">Cookies & Privacy Policy</Link>
                <Link ml="20px" mb="10px">Copyright Policy</Link>
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
