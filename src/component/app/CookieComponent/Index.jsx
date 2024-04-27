import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Back from "../../core/Back";
import ContainerWrapper from "../../core/ContainerWrapper";
import Header from "../../core/Header";
import BreadCrumbs from "../../core/BreadCrumbs";
import HeroSection from "../AboutUsComponent/HeroSection";
import CustomHeading from "./CustomHeading";
import CustomText from "./CustomText";
import Footer from "../../core/Footer/Footer";

const CookieMain = () => {
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
          url="/cookie"
        />
        <BreadCrumbs PageLink="/cookie" PageName=" Cookie policy" />

        <HeroSection
          Text1="Cookie
Policy"
        />
        <Box
          mb="48px"
          mt={{ base: "80px", md: "100px", lg: "130px", xl: "160px" }}
        >
          <CustomHeading HeadingText="What are they?" />
          <CustomText Textb="Cookies are small pieces of information sent by a web server to a web browser which allows the server to uniquely identify the browser on each page. Other tracking technologies are also used which are similar to cookies. This can include pixel tags and tracking URLs." />
          <CustomText Textb=" All these technologies are together referred to in this Policy as “Cookies”. Please note that if you delete or disable Cookies from us, you may not be able to access certain areas or features of our website." />
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText=" How do we use Cookies?" />
          <CustomText Textb=" The types of Cookies that we use on our website, and the purposes for which they are used, are set out below: Analytical/performance Cookies: These Cookies collect information about how you and other visitors use our website, for instance, which pages you go to most often, and if you get error messages from web pages. We use data from these Cookies to help test designs and to ensure that a consistent look and feel is maintained on your visit to the website. All information these Cookies collect is aggregated and is used only to improve how a website works." />
          <CustomText Textb=" Functionality Cookies: These Cookies allow our website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These Cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customise. They may also be used to provide services you have asked for such as watching a video. Additionally, these Cookies can be used to allow an optional service to function. The information these Cookies collect may be anonymised and these Cookies cannot track your browsing activity on other websites." />
          <CustomText
            Textb=" Pixel tags: These are also known as a clear GIF or web beacon. These are invisible tags placed on certain pages of our website but not on your computer. When you access these pages, pixel tags generate a generic notice of that visit. They usually work in conjunction with Cookies, registering when a particular device visits a particular page. If you turn off Cookies, the pixel tag will simply detect an anonymous website visit.
Tracking URLs: These are used to determine from which referring website our website is accessed."
          />
        </Box>
      </ContainerWrapper>
      <Footer/>
      </Box>
    </>
  );
};

export default CookieMain;
