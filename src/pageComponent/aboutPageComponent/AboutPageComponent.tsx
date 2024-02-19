import { Button, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "src/components/sectionTitle/SectionTitle";

const AboutPageComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle textAlign={"center"} title={t("about_title", { ns: "global" })} subTitle={t("about_subtitle", { ns: "global" })} />
      <Grid gridTemplateColumns={{ base: "100%", lg: "50% 50%" }} mt={5} gap={5}>
        <Image src="/images/about.png" alt="About page" />
        <Stack justifySelf={"center"} spacing={4} alignSelf={"center"}>
          <Heading fontSize={"3xl"} color={"gray.500"}>
            {t("about_heading", { ns: "global" })}
          </Heading>
          <Text>{t("about_paragrif_1", { ns: "global" })}</Text>
          <Text>{t("about_paragrif_2", { ns: "global" })}</Text>
          <Button colorScheme="facebook" variant={"outline"} width={"fit-content"} h={14}>
            {t("about_button", { ns: "global" })}
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default AboutPageComponent;
