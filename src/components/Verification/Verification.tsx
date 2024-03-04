import {
  Button,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";

const Verification = () => {
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("verification_title", { ns: "global" })}!
        <Text as={"span"} bgGradient={"linear(to-r, gray.400, facebook.400)"} bgClip={"text"}>
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("verification_desc", { ns: "global" })}
      </Text>
      <HStack justify={"center"}>
        <PinInput otp size={"lg"} colorScheme="facebook" focusBorderColor="facebook.500">
          {new Array(6).fill(1).map((_, idx) => (
            <PinInputField key={idx} />
          ))}
        </PinInput>
      </HStack>
      <Button
        mt={4}
        w={"full"}
        bgGradient={"linear(to-r, gray.400, facebook.400)"}
        color={"white"}
        _hover={{ bgGradient: "linear(to-r, gray.500, facebook.500)", boxShadow: "xl" }}
        h={14}
      >
        {t("verification_btn", { ns: "global" })}
      </Button>
    </Stack>
  );
};

export default Verification;
