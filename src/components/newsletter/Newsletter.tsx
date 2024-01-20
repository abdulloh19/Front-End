import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardBody minH={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={3}>
          <SectionTitle
            textAlign={"center"}
            maxW={"container.sm"}
            title={t("newsletter_title", { ns: "home" })}
            subTitle={t("newsletter_description", { ns: "home" })}
          />
          <Box position={"relative"}>
            <Input
              w={"full"}
              h={14}
              bg={"white"}
              color={"gray.900"}
              placeholder={t("newsletter_placeholder", { ns: "home" }) || ""}
              _placeholder={{ color: "gray.500" }}
            />
            <Button position={"absolute"} colorScheme="facebook" zIndex={99} right={2} top={2}>
              {t("newsletter_submit", { ns: "home" })}
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Newsletter;
