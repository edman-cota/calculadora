/* eslint-disable react/jsx-one-expression-per-line */
import { Button, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav style={{ height: "60px" }}>
      <Button h="2rem" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </nav>
  );
};

export default Navbar;
