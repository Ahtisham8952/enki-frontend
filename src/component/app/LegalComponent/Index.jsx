import { Box, Flex, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Back from "../../core/Back";
import ContainerWrapper from "../../core/ContainerWrapper";
import Header from "../../core/Header";
import BreadCrumbs from "../AboutUsComponent/BreadCrumbs";
import HeroSection from "../AboutUsComponent/HeroSection";
import CustomHeading from "../CookieComponent/CustomHeading";
import CustomText from "../CookieComponent/CustomText";
import Footer from "../../core/Footer/Footer";

const LegalMain = () => {
  return (
    <>
      <Box>
      <Header
        logoUrl="/blak-logo.png"
        barBg1="#252525"
        barBg2="rgba(37, 37, 37, 0.8)"
        barBg3="rgba(37, 37, 37, 0.4)"
      />
      <ContainerWrapper>
        <Back
          imgUrl="/dark-back.svg"
          url="/legaldisclaimer"
        />
        <BreadCrumbs PageLink="/legaldisclaimer" PageName=" Legal 
Disclaimer" />

        <HeroSection Text1="Legal 
Disclaimer" />
        <Box
          mb="48px"
          mt={{ base: "80px", md: "100px", lg: "130px", xl: "160px" }}
        >
          <CustomHeading HeadingText="Legal Disclaimer" />
          <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
          >
      Last updated: September 05, 2022
          </Text>
          <CustomText Textb="Interpretation and Definitions " />
          <CustomText Textb="Interpretation " />
          <CustomText Textb="The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.Definitions " />
          <CustomText marginbtm="24px" Textb="For the purposes of this Disclaimer: " />
          <OrderedList  fontFamily="Montserrat"
            
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}>
  <ListItem> <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Enoch , ST PETER PORT, Guernsey.</ListItem>
  <ListItem> <strong>Service</strong> refers to the Website.</ListItem>
  <ListItem><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</ListItem>
  <ListItem><strong>Website</strong> refers to Enoch, accessible from Enoch - Social Meta Commerce</ListItem>
</OrderedList>
       
          
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Disclaimer" />
          <CustomText Textb=" 
The information contained on the Service is for general information purposes only." />
          <CustomText Textb="The Company assumes no responsibility for errors or omissions in the contents of the Service. " />
          <CustomText marginbtm="24px" Textb="In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
 " />
           <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
          >
    Disclaimer Generator.
          </Text>
          <CustomText Textb="The Company does not warrant that the Service is free of viruses or other harmful components." />
          <CustomText Textb="External Links Disclaimer" />
          <CustomText Textb="The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company." />
          <CustomText Textb="Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites." />
          <CustomText Textb="Errors and Omissions Disclaimer" />
          <CustomText Textb="The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service." />
          <CustomText marginbtm="24px" Textb="The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information." />
        </Box>
        <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
          >
   Fair Use Disclaimer
          </Text>
          <CustomText Textb=" 
The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research." />
          <CustomText Textb="The Company believes this constitutes a fair use of any such copyrighted material as provided for in section 107 of the United States Copyright law. " />
          <CustomText Textb="If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner." />
          <CustomText Textb="Views Expressed Disclaimer " />
          <CustomText Textb=" The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company." />
          <CustomText marginbtm="24px" Textb=" Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever." />
          <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mt="24px"
          >
   No Responsibility Disclaimer
          </Text>
          <CustomText Textb="The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers. " />
          <CustomText marginbtm="24px" Textb=" In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service." />
          <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mt="24px"
          >
  "Use at Your Own Risk" Disclaimer
          </Text>
          <CustomText Textb=" All information in the Service is provided as is, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose." />
          <CustomText marginbtm="24px" Textb=" The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages." />

          <Text
            
            fontFamily="Montserrat"
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mt="24px"
          >
Contact Us
          </Text>
          <CustomText Textb=" If you have any questions about this Disclaimer, You can contact Us:" />
          <Flex alignItems={"center"} gap="5px">

         
          <CustomText Textb=" By email:" />
          <Link
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            textDecoration="underline"
            href="#"
          
          >
 info@enoch.app
          </Link>
          </Flex>
      </ContainerWrapper>
      <Footer/>
      </Box>
    </>
  );
};

export default LegalMain;
