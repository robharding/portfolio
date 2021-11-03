import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/media-query";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  let size = isNotSmallerScreen ? 10 : 8;

  return (
    <HStack spacing="24">
      <Icon as={FaFacebookF} boxSize={size}></Icon>
      <Icon as={FaGoogle} boxSize={size}></Icon>
      <Icon as={FaSpotify} boxSize={size}></Icon>
      <Icon as={FaShopify} boxSize={size}></Icon>
    </HStack>
  );
}

export default Social;
