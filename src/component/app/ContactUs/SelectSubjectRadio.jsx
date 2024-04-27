import { Radio, RadioGroup, useRadioGroup, Box, useRadio, Image, Grid, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";


function GiftSelectWrapper(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);
  
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    console.log(props.isSelect);
    return (
      <Box as="label" gap="10px" display={"flex"} alignItems="center" position={"relative"}  cursor={"pointer"} mb="24px"  >
        <input {...input} />
        <Box
          {...checkbox}

          cursor="pointer"
          w="13px"
          zIndex={"999"}
              h="13px"
       
        border="2px solid #E0E0E0"
       
        borderRadius="50px"
       
        bg="#E0E0E0"
         
         
         
       
        >
         
        
        </Box>
        <Text
            
            color="#000000"
            fontSize="12px"
            fontWeight="400"
            lineHeight={"20px"}
            fontFamily="Montserrat"
          >
    {props.data.text}
          </Text>
       
       
        <Box 
        mx="8px"
           
  
           >
        {props.isSelect === props.data.text && (
            <Image
              position="absolute"
              top="4px"
              zIndex={"999"}
              left="0px"
              w="14px"
              h="14px"
              src="https://cdn.enochdev.com/enki/tickblacks.svg"
              alt="icon"
            />
          )}
          
           
           
        </Box>
       
       
       
      </Box>
    );
  }



const SelectSubjectRadio = ({Subject}) => {
  const [isSelect, setIsSelect] = useState({});
  const [isProcced, setIsProcced] = useState("");

  const handleSelect = (value) => {
    setIsSelect(value);
    setIsProcced(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: handleSelect,
  });

  const group = getRootProps();
  console.log(isSelect);
  return (
    <Box  display="flex" alignItems="center" flexWrap="wrap"  >
       
      {Subject?.map((radioValue) => {
        const value = radioValue?.text;
        const radio = getRadioProps({ value });
        return (
          <GiftSelectWrapper
          
            key={value}
            data={radioValue}
            {...radio}
            isSelect={isSelect}
          >
            {value}
          </GiftSelectWrapper>
        );
      })}
    </Box>
  );
};

export default SelectSubjectRadio;
