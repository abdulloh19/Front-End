import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonStarsFill, BsTranslate, BsFilterLeft } from "react-icons/bs";
import Link from "next/link";
import { DarkLogo, EngIcons, LightLogo, UzbIcons } from "src/icons";
import { HiUser } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import RusIcons from "src/icons/rus";
import { HeaderProps } from "./header.props";

const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      zIndex={1005}
      w={"full"}
      h={"10vh"}
      px={10}
      borderBottom={"1px"}
      borderBottomColor={useColorModeValue("gray.400", "gray.700")}
      pos={"fixed"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      left={0}
      top={0}
      right={0}
    >
      <Flex justify={"space-between"} align={"center"} h={"full"}>
        <HStack>
          <Icon as={BsFilterLeft} onClick={onToggle} w={6} h={6} cursor={"pointer"} />
          <Link href={"/"}>{colorMode === "light" ? <DarkLogo /> : <LightLogo />}</Link>
        </HStack>
        <HStack>
          <IconButton aria-label="support" colorScheme="facebook" variant={"ghost"} icon={<MdContactSupport />} />
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
              as={IconButton}
              icon={<BsTranslate />}
              colorScheme="facebook"
              variant={"solid"}
            />
            <MenuList>
              <MenuItem icon={<UzbIcons />}>UZB</MenuItem>
              <MenuItem icon={<RusIcons />}>RUS</MenuItem>
              <MenuItem icon={<EngIcons />}>ENG</MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            aria-label="color-mode"
            onClick={toggleColorMode}
            icon={colorMode == "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            colorScheme="facebook"
            variant={"outline"}
          />
          <Button rightIcon={<HiUser />} colorScheme="facebook">
            LOGIN
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
