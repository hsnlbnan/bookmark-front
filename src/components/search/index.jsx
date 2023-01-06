import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "../../icons/icon";
import { IconButton } from "@chakra-ui/react";

export const Search = () => {
  return (
    <>
      <InputGroup
        size="lg"
        w="100%"
        maxW="560px"
        border="none"
        _focusWithin={{
          border: "none",
        }}
        display="flex"
        alignItems="center"
      >
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon
              color="gray.200"
              width="20px"
              height="20px"
              mr="15px"
              ml="15px"
            />
          }
        />
        <Input
          placeholder="Look for something..."
          size="lg"
          variant="filled"
          color="gray.400"
          bg="gray.800"
          borderRadius="full"
          _hover={{
            bg: "gray.900",
          }}
          _focus={{
            bg: "gray.900",
            borderColor: "primary",
          }}
        />
      </InputGroup>
    </>
  );
};

export default Search;
