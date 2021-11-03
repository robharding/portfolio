import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/media-query";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  let spacing = isNotSmallerScreen ? 50 : 25;

  return (
    <HStack spacing={spacing} mx={10}>
      <Icon as={FaFacebookF} boxSize={50}></Icon>
      <Icon as={FaGoogle} boxSize={50}></Icon>
      <Icon as={FaSpotify} boxSize={50}></Icon>
      <Icon as={FaShopify} boxSize={50}></Icon>
    </HStack>
  );
}

export default Social;
