import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonStarsFill, BsTranslate, BsFilterLeft } from "react-icons/bs";
import Link from "next/link";
import { DarkLogo, LightLogo } from "src/icons";
import { HiUser } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";
import { HeaderProps } from "./header.props";
import { language } from "src/config/constants";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";
import { useRouter } from "next/router";

const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const router = useRouter()

  const onLanguage = (lng: string) => {
    router.replace(router.asPath)
    i18n.changeLanguage(lng);
  };

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
          <Menu placement="bottom">
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              // _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
              as={Button}
              rightIcon={<TfiWorld />}
              colorScheme="gray"
              variant={"outline"}
              textTransform={"capitalize"}
            >
              {i18n.resolvedLanguage}
            </MenuButton>
            <MenuList p={0}>
              {language.map((item) => (
                <MenuItem
                  key={item.lng}
                  onClick={() => onLanguage(item.lng)}
                  icon={<item.icon />}
                  backgroundColor={i18n.resolvedLanguage === item.lng ? "facebook.500" : ""}
                >
                  {item.nativeLng}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <IconButton
            aria-label="color-mode"
            onClick={toggleColorMode}
            icon={colorMode == "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            colorScheme="gray"
            variant={"outline"}
          />
          <Button rightIcon={<HiUser />} colorScheme="facebook">
            {t("login", { ns: "layout" })}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
