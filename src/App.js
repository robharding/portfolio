import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5} overflowX="hidden">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          RH
        </Heading>

        <Spacer></Spacer>

        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/robjharding/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => window.open("https://www.instagram.com/robharding__/")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/robharding")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
