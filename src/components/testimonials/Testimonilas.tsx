import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Carousel from "react-multi-carousel";
import { testimonilasCarousel } from "src/config/carousel";
import { Center, Icon, Text } from "@chakra-ui/react";
import { ImQuotesRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

const Testimonilas = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle textAlign={"center"} title={t("testimonials_title", { ns: "home" })} subTitle={t("testimonials_description", { ns: "home" })} />

      <Carousel responsive={testimonilasCarousel} arrows={true} showDots={false} autoPlay={true} infinite>
        {data.map((item, idx) => (
          <Center key={idx} flexDirection={"column"} maxW={"container.sm"} mx={"auto"}>
            <Icon as={ImQuotesRight} fontSize={100} />
            <Text mt={5} textAlign={"center"}>
              {t(item.description, { ns: "home" })}
            </Text>
            <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>
              {t(item.name, {ns: "home"})}
            </Text>
          </Center>
        ))}
      </Carousel>
    </>
  );
};

export default Testimonilas;

const data = [
  {
    name: "Samar Badriddinov",
    description:
      "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.",
  },
  {
    name: "Samar Badriddinov",
    description:
      "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.",
  },
  {
    name: "Samar Badriddinov",
    description:
      "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.",
  },
  {
    name: "Samar Badriddinov",
    description:
      "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.",
  },
];
