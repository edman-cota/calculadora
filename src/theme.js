import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Button: {
    baseStyle: (props) => ({
      display: "grid",
      borderRadius: "0",
      backgroundColor: mode("#FAFAFA", "#262931")(props),
    }),
    variants: {
      ghost: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    sizes: {
      lg: {
        height: "5rem",
      },
      md: {
        height: "5rem",
      },
      sm: {
        height: "5rem",
      },
      xs: {
        height: "100%",
      },
    },
  },
};

const theme = extendTheme({ config, components });

export default theme;
