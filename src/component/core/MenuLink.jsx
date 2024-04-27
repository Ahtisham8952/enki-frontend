import { Link } from "@chakra-ui/react"

const MenuLink = ({link, linkText}) => {
    return (
        <>
            <Link href={link} mb={{xxl: "40px", md: "32px", sm: "30px", base: "20px"}} 
                fontStyle="italic"
                fontWeight="700"
                fontSize={{xl: "40px", lg: "36px", sm: "24px", base: "20px"}}
                lineHeight="44px"
                color="#FFFFFF"
            >
                {linkText}
            </Link>
        </>
    )
}

export default MenuLink
