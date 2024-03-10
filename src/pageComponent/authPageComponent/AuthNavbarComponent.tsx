import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { language, navigation } from "src/config/constants";
import { DarkLogo, LightLogo } from "src/icons";

const AuthNavbarComponent = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [menuAuth, setMenuAuth] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.700", "white");

  const onLanguage = (lng: string) => {
    router.replace(router.asPath);
    i18n.changeLanguage(lng);
  };

  const menuToggle = () => setMenuAuth((prev) => !prev);

  return (
    <>
      <Box w={"full"} h={"10vh"} zIndex={999}>
        <Container maxW={"container.lg"}>
          <Flex h={"10vh"} justify={"space-between"} align={"center"}>
            <HStack>
              <IconButton
                aria-label="menu"
                onClick={menuToggle}
                icon={<BiMenuAltLeft />}
                colorScheme="gray"
              />
              <Link href={"/"}>
                {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
              </Link>
            </HStack>
            <HStack gap={5}>
              {navigation[1].links.map((nav) => (
                <Link href={nav.route}>
                  <Box
                    display={{ base: "none", md: "flex" }}
                    color={"facebook.300"}
                    _hover={{ textDecoration: "underline", color: textColor }}
                    as="a"
                  >
                    {t(nav.label, { ns: "layout" })}
                  </Box>
                </Link>
              ))}
              <Menu placement="bottom">
                <MenuButton
                  px={4}
                  py={2}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
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
                      backgroundColor={
                        i18n.resolvedLanguage === item.lng ? "facebook.500" : ""
                      }
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
            </HStack>
          </Flex>
        </Container>
        <Box
          zIndex={1005}
          w={"full"}
          h={"10vh"}
          px={10}
          borderBottom={"1px"}
          borderBottomColor={useColorModeValue("gray.400", "gray.700")}
          pos={"fixed"}
          bg={useColorModeValue("gray.50", "gray.800")}
          color={useColorModeValue("gray.700", "gray.200")}
          left={0}
          top={menuAuth ? "10vh" : "-20vh"}
          transition={"all .5s ease"}
          right={0}
        >
          <HStack justify={"center"} align={"center"} gap={5} h={"100%"}>
            {navigation[1].links.map((nav) => (
              <Link href={nav.route}>
                <Box
                  display={{ base: "flex", md: "none" }}
                  color={"facebook.300"}
                  _hover={{ textDecoration: "underline", color: textColor }}
                  as="a"
                >
                  {t(nav.label, { ns: "layout" })}
                </Box>
              </Link>
            ))}
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default AuthNavbarComponent;
