import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fontSizes: {
    lg: "18px",
  },
  colors: {
    primary: "#FFE766",
    gray: {
      900: "#171717",
      800: "#1E1E1E",
      700: "#292929",
      600: "#2D2D2D",
      500: "#363636",
      400: "#4A4A4A",
      300: "#5B5B5B",
      200: "#777777",
      100: "#9A9A9A",
      50: "#D1D1D1",
    },
  },

  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
