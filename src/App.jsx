import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import Search from "./components/search";
import Logo from "./assets/logo.svg";
import { AddIcon, MoreIcon } from "./icons/icon";

function App() {
  return (
    <Box
      bg="gray.900"
      w="100%"
      h="100px"
      color="white"
      fontSize="4xl"
      textAlign="center"
      lineHeight="100px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"50px"}
    >
      <img src={Logo} alt="Logo" />
      <Search />
      <Flex>
        <Button
          size="lg"
          borderRadius="full"
          background={"primary"}
          color={"#000"}
          leftIcon={<AddIcon width="24px" height="24px" color="gray.900" />}
          fontSize="16px"
          fontWeight="bold"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Add Link
        </Button>

        <Flex alignItems={"flex-start"}>
          <Avatar
            ml="50px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            width={"50px"}
            height={"50px"}
          />
          <Flex flexDir={"column"} alignItems={"flex-start"} ml="13px">
            <Text fontSize="18px" lineHeight="22px" fontWeight="medium">
              Necat Ayhan
            </Text>
            <Text as="span" fontSize="sm" color="gray.200" lineHeight="16px">
              @necatayhan
            </Text>
          </Flex>
          <MoreIcon
            ml="10px"
            width="24px"
            height="24px"
            marginTop="4px"
            color="white"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
