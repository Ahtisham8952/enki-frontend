import { Link } from '@chakra-ui/react'
import React from 'react'

const FooterMenuLink = ({ linkText, linkUrl }) => {
    return (
        <>
           <Link
                    href={linkUrl}
                    color="#FFF"
                    fontSize={{sm: "15px", base: "14px"}}
                    fontFamily="Poppins"
                    fontStyle="italic"
                    fontWeight="500"
                    lineHeight="30.549px"
                    textDecorationLine="underline"
                >
                    {linkText}
                </Link>
        </>
    )
}

export default FooterMenuLink