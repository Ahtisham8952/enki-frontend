import { Link, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import React from 'react'

const spin = keyframes`
  from { width: auto;}
  to { width: 40px; margin-left: -10px; }
`

const Back = ({url, imgUrl}) => {
    const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 7s ease`
    return (
        <>
            <Link href={url} cursor="pointer">
                <Image
 alt="img" src={imgUrl} alt="back" mt="-5px" animation={animation} mr="auto" />
            </Link>
        </>
    )
}

export default Back
