import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { Pricing } from "src/components";

const PricingPageComponent = () => {
  const options = [
    { id: 1, desc: "Lorem ipsum" },
    { id: 1, desc: "Lorem ipsum dolor" },
    { id: 1, desc: "Monthly updates" },
  ];
  return (
    <>
      <Stack spacing={4} py={10} w={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{ base: "flex-start", md: "space-around" }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack w={{ base: "100%", md: "40%" }} textAlign={"center"}>
            <Heading size={"lg"}>
              {t("pricing_title", { ns: "global" })}{" "}
              <Text color={"green.400"}>{t("pricing_title_green", { ns: "global" })}</Text>
            </Heading>
          </Stack>
          <Stack w={{ base: "100%", md: "60%" }}>
            <Text textAlign={"center"}>{t("pricing_desc", { ns: "global" })}</Text>
          </Stack>
        </Stack>
        <Divider />
        <Pricing title="Standart" price={20} options={options} />
        <Divider />
        <Pricing title="Premium" price={32} options={options} checked={true} />
        <Divider />
        <Pricing title="Business" price={50} options={options} />
      </Stack>
    </>
  );
};

export default PricingPageComponent;
