import React from "react";
import { IconButton, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Text w="100%" justifyContent="center" display="flex">
      <IconButton
        variant="ghost"
        height="2rem"
        borderLeftRadius="md"
        onClick={toggleColorMode}
        icon={<FaSun />}
      />
      <IconButton
        variant="ghost"
        height="2rem"
        borderRightRadius="md"
        onClick={toggleColorMode}
        icon={<FaMoon />}
      />
    </Text>
  );
};

export default ColorModeSwitcher;
