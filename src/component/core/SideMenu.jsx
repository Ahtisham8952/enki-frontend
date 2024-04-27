import { Link, Flex, Text, Badge, Box, } from '@chakra-ui/react'
import React from 'react'
import SideMenuItem from './SideMenuItem'
import BusinessDrawer from '../app/Business/BusinessDrawer'

const SideMenu = () => {
    return (
        <>
          <Box position="fixed" right={{xxl: "80px", xl: "60px", base: "20px"}} top="20vh" bottom="20vh" zIndex="111" display={{md: "block", base: "none"}}>
            <SideMenuItem linkText="Home" link="/home" />
            <SideMenuItem linkText="About" link="/about" />
            <SideMenuItem linkText="Business" link="/business/business-main" />
            <SideMenuItem linkText="Approch" link="/approach" />
            <SideMenuItem linkText="Team" link="/team" />
            <SideMenuItem linkText="Investors" link="/investor" />
            <SideMenuItem linkText="Corporate&nbsp;Structure" link="/corporate-structure" />
            <SideMenuItem linkText="Milestone" link="/milestones" />
            <SideMenuItem linkText="FAQs" link="/faq" />
            <SideMenuItem linkText="Press" link="/press" />
            <SideMenuItem linkText="Contact&nbsp;us" link="/contact-us" />
          </Box>
        </>
    )
}

export default SideMenu
