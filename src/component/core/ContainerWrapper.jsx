import { Container } from "@chakra-ui/react"
import React from 'react'

const ContainerWrapper = ({children}) => {
    return (
        <>
            <Container maxW="1920px" px={{xxl: "80px", xl: "60px", base: "20px"}} mx="auto">
                {children}
            </Container>
        </>
    )
}

export default ContainerWrapper
