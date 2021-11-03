import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Icon from "@chakra-ui/icon";
import { DiJavascript1, DiHtml5, DiPython } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16" textAlign="center">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          5+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl" textAlign="center">
          Web Applications developer specialized in ReactJS and Django.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ cursor: "pointer" }}
          >
            <Icon color="white" p="4" as={DiJavascript1} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Javascript
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400", cursor: "pointer" }}
          >
            <Icon color="white" p="4" as={DiHtml5} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              HTML & CSS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400", cursor: "pointer" }}
          >
            <Icon color="white" p="4" as={DiPython} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Python
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
