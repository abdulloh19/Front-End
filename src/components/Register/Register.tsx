import {
  Box,
  Button,
  Checkbox,
  Flex,
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
import { RegisterProps } from "./register.props";
import { useShowPassword } from "src/hook/useShowPassword";
import { t } from "i18next";

const Register = ({ onNavigateStateComponent }: RegisterProps) => {
  const { confirm, show, toggleShow, toggleShowConfirm } = useShowPassword();
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("register_title", { ns: "global" })}
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("register_desc", { ns: "global" })}
      </Text>
      <FormControl isRequired>
        <FormLabel>{t("login_page_email", { ns: "global" })}</FormLabel>
        <Input focusBorderColor="facebook.500" type="text" placeholder="example@sammi.ac" height={14} />
      </FormControl>
      <Flex gap={4}>
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
              <Icon
                as={show ? AiOutlineEye : AiOutlineEyeInvisible}
                cursor={"pointer"}
                onClick={toggleShow}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>{t("register_confirm", { ns: "global" })}</FormLabel>
          <InputGroup>
            <Input
              focusBorderColor="facebook.500"
              type={confirm ? "password" : "text"}
              placeholder="****"
              height={14}
            />
            <InputRightElement pt={4}>
              <Icon
                as={confirm ? AiOutlineEye : AiOutlineEyeInvisible}
                cursor={"pointer"}
                onClick={toggleShowConfirm}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
      <HStack justify={"space-between"}>
        <Checkbox colorScheme="facebook">{t("login_page_remember", { ns: "global" })}</Checkbox>
        <Box
          as={"a"}
          onClick={() => onNavigateStateComponent("account-recovery")}
          cursor={'pointer'}
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
        {t("reister_already", { ns: "global" })}{" "}
        <Box
          as={"span"}
          onClick={() => onNavigateStateComponent("login")}
          color={"teal.500"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
        >
          {t("login", { ns: "global" })}
        </Box>{" "}
      </Text>
    </Stack>
  );
};

export default Register;
