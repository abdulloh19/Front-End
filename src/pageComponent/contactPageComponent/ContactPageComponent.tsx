import { Button, Card, CardBody, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "src/components/sectionTitle/SectionTitle";

const ContactPageComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex h={"90vh"} justify={"flex-start"} direction={{ base: "column", lg: "row" }} gap={4} align={"center"}>
        <SectionTitle
          w={{ base: "100%", lg: "40%" }}
          title={t("contact_title", { ns: "global" })}
          subTitle={t("contact_subtitle", { ns: "global" })}
        />
        <Card w={{ base: "100%", lg: "60%" }}>
          <CardBody>
            <Heading fontSize={"2xl"}>{t("contact_heading", { ns: "global" })}</Heading>
            <Text fontSize={"lg"} mt={4}>
              {t("contact_paragrif", { ns: "global" })}
            </Text>
            <Stack spacing={4} mt={5}>
              <FormControl>
                <FormLabel> {t("contact_form_name", { ns: "global" })} </FormLabel>
                <Input type="text" placeholder="Omar" h={14} />
              </FormControl>
              <FormControl>
                <FormLabel>{t("contact_email", { ns: "global" })}</FormLabel>
                <Input type="email" placeholder="example@sammi.ac" h={14} />
              </FormControl>
              <FormControl>
                <FormLabel>{t("contact_text_area", { ns: "global" })}</FormLabel>
                <Textarea placeholder="body" height={"150px"} />
              </FormControl>
              <Button w={"full"} colorScheme="facebook" h={14}>
                {t("contact_button", { ns: "global" })}
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default ContactPageComponent;
