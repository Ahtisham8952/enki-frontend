import { Box, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const CustomLabelInput = ({Label,PlaceHold}) => {
      const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
    
  return (
    <Box mb="21px">
            <FormLabel
            color={!isFocused ? ("#000000"):("#8D8D8D")}
            fontSize="12px"
            fontWeight="500"
            lineHeight={"20px"}
            fontFamily="Montserrat"
            mb="0px"
            >
                {Label}
            </FormLabel>
            <Input
              fontSize="14px"
              fontFamily="Montserrat"
              fontWeight="500"
              lineHeight={"20px"}
            placeholder={PlaceHold}
            onFocus={handleFocus}
      onBlur={handleBlur}
             px="0px"  border="none" borderRadius={"0px"} _focusVisible={{bg:'none'}} _hover={{borderColor: "auto"}} borderBottom={!isFocused ? ("1px solid #8D8D8D"):("1px solid #000000")} />
        </Box>
  )
}

export default CustomLabelInput