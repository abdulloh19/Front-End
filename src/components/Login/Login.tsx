import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginProps } from "./login.props";
import { useShowPassword } from "src/hook/useShowPassword";
import { t } from "i18next";

const Login = ({ onNavigateStateComponent }: LoginProps) => {
  const { show, toggleShow } = useShowPassword();

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("login", { ns: "global" })}
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("login_page_desc", { ns: "global" })}
      </Text>
      <FormControl isRequired>
        <FormLabel>{t("login_page_email", { ns: "global" })}</FormLabel>
        <Input focusBorderColor="facebook.500" type="text" placeholder="example@sammi.ac" height={14} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t("login_page_password", { ns: "global" })}</FormLabel>
        <InputGroup>
          <Input
            focusBorderColor="facebook.500"
            type={show ? "password" : "text"}
            placeholder="****"
            height={14}
          />
          <InputRightElement pt={4}>
            <Icon as={show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={"pointer"} onClick={toggleShow} />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <HStack justify={"space-between"}>
        <Checkbox colorScheme="facebook">{t("login_page_remember", { ns: "global" })}</Checkbox>
        <Box
          as={"a"}
          onClick={() => onNavigateStateComponent ("account-recovery")}
          cursor={"pointer"}
          color={"teal.500"}
          _hover={{ textDecoration: "underline" }}
        >
          {t("login_page_forget", { ns: "global" })}?
        </Box>
      </HStack>
      <Button
        mt={4}
        w={"full"}
        bgGradient={"linear(to-r, gray.400, facebook.400)"}
        color={"white"}
        _hover={{ bgGradient: "linear(to-r, gray.500, facebook.500)", boxShadow: "xl" }}
        h={14}
      >
        {t("login_page_btn", { ns: "global" })}
      </Button>
      <Text>
        {t("login_page_not_account", { ns: "global" })}?{" "}
        <Box
          as={"span"}
          onClick={() => onNavigateStateComponent("register")}
          color={"teal.500"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
        >
          {t("login_page_register", { ns: "global" })}
        </Box>{" "}
      </Text>
    </Stack>
  );
};

export default Login;
