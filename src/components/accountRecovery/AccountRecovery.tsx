import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  Progress,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AccountRecovery } from "./accountRecovery.props";
import { useShowPassword } from "src/hook/useShowPassword";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { t } from "i18next";

const AccountRecovery = ({ onNavigateStateComponent }: AccountRecovery) => {
  const [progress, setprogress] = useState<33.33 | 66.66 | 100>(33.33);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { confirm, show, toggleShow, toggleShowConfirm } = useShowPassword();
  const toast = useToast();

  const onStepForm2 = () => {
    setStep(2);
    setprogress(66.66);
  };
  const onStepForm3 = () => {
    setStep(3);
    setprogress(100);
  };
  const onStepForm4 = () => {
    onNavigateStateComponent("login");
    toast({
      title: "SuccessFully edited",
      description: "You can login to account with new password",
      status: "success",
      position: "top-right",
      isClosable: true,
    });
    // setTimeout(toast, 5000);
  };

  const form1 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form1", { ns: "global" })}
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form1", { ns: "global" })}
      </Text>
      <FormControl isRequired>
        <FormLabel>{t("login_page_email", { ns: "global" })}</FormLabel>
        <Input focusBorderColor="facebook.500" type="text" placeholder="example@sammi.ac" height={14} />
      </FormControl>
      <Button
        onClick={onStepForm2}
        w={"full"}
        bgGradient={"linear(to-r, gray.400, facebook.400)"}
        color={"white"}
        _hover={{ bgGradient: "linear(to-r, gray.500, facebook.500)", boxShadow: "xl" }}
        h={14}
      >
        {t("account_recovery_btn_form1", { ns: "global" })}
      </Button>
    </>
  );
  const form2 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form2", { ns: "global" })}
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form2", { ns: "global" })}
      </Text>
      <HStack justify={"center"}>
        <PinInput otp size={"lg"} colorScheme="facebook" focusBorderColor="facebook.500">
          {new Array(6).fill(1).map((_, idx) => (
            <PinInputField key={idx} />
          ))}
        </PinInput>
      </HStack>
      <Button
        onClick={onStepForm3}
        w={"full"}
        bgGradient={"linear(to-r, gray.400, facebook.400)"}
        color={"white"}
        _hover={{ bgGradient: "linear(to-r, gray.500, facebook.500)", boxShadow: "xl" }}
        h={14}
      >
        {t("account_recovery_btn_form2", { ns: "global" })}
      </Button>
    </>
  );
  const form3 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("account_recovery_title_form3", { ns: "global" })}
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("account_recovery_description_form3", { ns: "global" })}
      </Text>
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
      <Button
        onClick={onStepForm4}
        w={"full"}
        bgGradient={"linear(to-r, gray.400, facebook.400)"}
        color={"white"}
        _hover={{ bgGradient: "linear(to-r, gray.500, facebook.500)", boxShadow: "xl" }}
        h={14}
      >
        {t("account_recovery_btn_form3", { ns: "global" })}
      </Button>
    </>
  );
  return (
    <>
      <Progress value={progress} colorScheme="facebook" isAnimated hasStripe />
      {step == 1 && form1}
      {step == 2 && form2}
      {step == 3 && form3}
    </>
  );
};

export default AccountRecovery;
