import { Box, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { format } from "date-fns";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      pl={{ base: 0, lg: "320px" }}
      mt={10}
      w={"full"}
      borderTop={"1px"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopColor={useColorModeValue("gray.400", "gray.700")}
      h={"10vh"}
    >
      <Flex justify={"space-between"} align={"center"} h={"full"}>
        <Text>© {format(new Date(), "yyyy")} Sammi, All Right Reserved</Text>
        <Flex gap={3} mr={10}>
          <IconButton icon={<FaInstagram />} aria-label="instagram" colorScheme="facebook" variant={"outline"} />
          <IconButton icon={<FaFacebook />} aria-label="facebook" colorScheme="facebook" variant={"outline"} />
          <IconButton icon={<FaYoutube />} aria-label="youtube" colorScheme="facebook" variant={"outline"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
