import { Box, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Back from "../../core/Back";
import ContainerWrapper from "../../core/ContainerWrapper";
import Header from "../../core/Header";
import BreadCrumbs from "../../core/BreadCrumbs";
import HeroSection from "../AboutUsComponent/HeroSection";
import CustomHeading from "../CookieComponent/CustomHeading";
import CustomText from "../CookieComponent/CustomText";
import Footer from "../../core/Footer/Footer";

const TermsMain = () => {
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
          url="/termsandcondition"
        />
        <BreadCrumbs PageLink="/termsandcondition" PageName=" Terms & Conditions" />

        <HeroSection Text1="Terms &
Conditions" />
        <Box
          mb="48px"
          mt={{ base: "80px", md: "100px", lg: "130px", xl: "160px" }}
        >
          <CustomHeading HeadingText="Terms and Conditions of Use" />
          
          <CustomText Textb="By accessing this site you agree to be bound by the terms described below. We may change any aspect of the site, or suspend it, at any time and without notice. We may also change these Terms and Conditions of Use at any time by posting a new version to the site. Any changes will be effective when posted. Your continued use of the site after a change to these Terms and Conditions of Use constitutes your acceptance of any changes to the Terms and Conditions of Use." />
       
          
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText=" No Offering" />
          <CustomText marginbtm="24px" Textb=" The materials on the site are provided for general information purposes only and do not constitute professional or financial advice. Information on this site may not be accurate or current and may be rendered inaccurate by changes in law or regulation. Nothing on this site is intended to constitute an offer to sell or a solicitation of an offer to buy any interest in any investment vehicle managed by EQT or any company in which EQT or its affiliates have invested. You are responsible for obtaining your own legal, tax and financial advice before entering into any transaction or investment with a member of EQT.If it is illegal or prohibited in your country to access or use this site, then you should not do so. You are responsible for compliance with all local laws and regulations." />
    
        
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Use of Materials on the Site" />
          <CustomText marginbtm="24px" Textb="You may download and print materials from this site solely for your personal use, but you may not use or copy them for commercial purposes, make more than a few copies of a given page or item or copy a substantial proportion of the site, except with our prior written permission. Requests for permission should be sent to info@eqt.se. Copies must not alter the original content and must reproduce our copyright notices.
Except as otherwise permitted herein, you may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, frame, create derivative of, transfer or otherwise use in any other way, in whole or in part, any information obtained from this site." />
        
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Ownership" />
          <CustomText Textb=" All content included on this site, such as graphics, logos, articles and other materials, is the property of EQT or others and is protected by copyright and other laws. All trademarks and logos displayed on this site are the property of their respective owners, who may or may not be affiliated with EQT. Except as expressly provided herein, we do not grant to you any express or implied rights with respect to this site or the material or information contained on this site." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Limitation on Liability" />
          <CustomText marginbtm="24px" Textb=" We make no commitment regarding the availability, performance or functions of the site and give no warranty that your access to the site or use of the materials on the site will be lawful in any particular jurisdiction - you are responsible for compliance with local law and regulation. Neither we, EQT’s related companies or affiliates nor any of our respective directors, officers, employees, agents or other representatives will be liable for any loss or damage of any kind which arises or may arise as a result of or in connection with your use of (or inability to use) or reliance on information on the site or of any unavailability or failure of the site itself, including as a result of our negligence. You acknowledge that we provide the contents of this site on an as is basis with no warranties of any kind. Your use of this site and use or reliance upon any materials or information on it is solely at your own risk. We do not guarantee that material on this site will be free from infection, viruses, worms, Trojan horses and/or other similar code. You are responsible for virus checking and taking any other protective steps." />
          <CustomText marginbtm="24px" Textb=" EQT’s liability is limited to the maximum extent permitted by law and is limited even if EQT has been advised of the possibility of the damages, liability or injury that you suffer, including any damages, liabilities or injury caused by any failure of performance, error, omission, defect, interruption, delay in operation, computer virus, line failure or other computer malfunction." />
          <CustomText marginbtm="24px" Textb=" The site was developed, and is hosted, by a third-party for whose acts and omissions we accept no responsibility. There may be links from the site to external Internet sites. In addition, third-party sites may be linked to this site, with or without EQT’s consent. Accordingly, we expressly disclaim any responsibility for the content, the accuracy of the information, the quality of services provided by or advertised on and/or software downloaded from any such third-party sites. Moreover, any link from the site to a third-party site does not constitute an endorsement by EQT of any third-party site or the products or services provided by any third party, and EQT takes no responsibility therefore." />
          <CustomText marginbtm="24px" Textb="If you are accessing this site from a jurisdiction that does not permit the limitation or exclusion of liability as described herein, the provisions of these Terms and Conditions of Use shall apply to the maximum extent permissible in such jurisdiction. Indemnification By accessing this site, you agree to indemnify EQT and its affiliates, and each of their respective partners, stockholders, members, managers, officers, directors, employees, investment advisers and agents (collectively, the “EQT Indemnitees”) against, and hold the EQT Indemnitees harmless from, any and all claims, demands, debts, obligations, liabilities, damages (actual, consequential or special), costs and expenses of any kind whatsoever (collectively, “Claims”), including attorneys’ fees, arising from your use of this website. You hereby release the EQT Indemnitees from any and all Claims that you may have against the EQT Indemnitees arising out of or in any way related to such disputes. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Governing Law and Arbitration" />
          <CustomText Textb=" Any dispute arising out of or in connection with this site or these Terms and Conditions of Use shall be governed solely by the laws of England, without regards to conflicts of law rules, and shall be settled by arbitration in accordance with the Rules of Arbitration of the International Chamber of Commerce in effect at the time of the arbitration. The seat of the arbitration shall be London, England. At EQT's discretion, hearings may for convenience take place at an alternative location. The language of the arbitration shall be English. The arbitration award shall be final and binding on the parties." />
          <CustomText Textb="You must commence any cause of action you may have with respect to your use of this site within one year after the claim or cause of action arises. If, for any reason, any provision in these Terms and Conditions of Use is determined to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to effect the intent of these Terms and Conditions of Use, and the remainder shall continue in full force and effect. Any failure or delay by EQT in enforcing an obligation or exercising a right under these Terms and Conditions of Use does not amount to a waiver of that obligation, or right or any other obligation or right. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Local Restrictions" />
          <CustomText Textb=" The distribution of material on this site may be restricted by the laws or regulations of the country from which you are accessing this site. The information on this site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution would be contrary to local law or regulation. We make no warranties that the materials on this site are appropriate or available for use in such locations." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="United Kingdom" />
          <CustomText Textb=" In the U.K. this site is issued by EQT Partners UK Advisors LLP, which is authorized and regulated by the Financial Conduct Authority. In the U.K., this site is directed only at persons who (a) have professional experience of participating in unregulated schemes, (b) fall within Article 22 (high net worth companies, unincorporated associations, etc.) of the Financial Services and Markets Act 2000 (Promotion of Collective Investment Schemes) (Exemptions) Order 2001 (as amended) or (c) are persons to whom this site may otherwise lawfully be directed together relevant persons. The contents of this site must not be acted on or relied on by persons who are not relevant persons. Any investment or investment activity to which this site relates is available only to relevant persons and will be engaged in only with relevant persons." />
         
        </Box>
        
      </ContainerWrapper>
      <Footer/>
      </Box>
    </>
  );
};

export default TermsMain;
