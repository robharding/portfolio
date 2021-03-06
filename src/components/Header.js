import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        zIndex="-1"
      ></Circle>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? 0 : 16} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I'm
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Rob Harding
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Web Developer, BSc Computer Science at Wilfrid Laurier University
          </Text>
        </Box>
        <Image
          mt={isNotSmallerScreen ? 0 : 12}
          mb={isNotSmallerScreen ? 0 : 12}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="1g"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/5507612?v=4"
          alignSelf={isNotSmallerScreen ? "flex-end" : "center"}
        />
      </Flex>
    </Stack>
  );
}

export default Header;
