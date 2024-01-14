import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Carousel from "react-multi-carousel";
import { testimonilasCarousel } from "src/config/carousel";
import { Center, Icon, Text } from "@chakra-ui/react";
import { ImQuotesRight } from "react-icons/im";

const Testimonilas = () => {
  return (
    <>
      <SectionTitle textAlign={"center"} title="Testimonials" subTitle="10,000+ unique online course list designs" />

      <Carousel responsive={testimonilasCarousel} arrows={true} showDots={false} autoPlay={true}  infinite>
        {data.map((item, idx) => (
          <Center key={idx} flexDirection={"column"} maxW={"container.sm"} mx={"auto"}>
            <Icon as={ImQuotesRight} fontSize={100} />
            <Text mt={5} textAlign={"center"}>
              {item.description}
            </Text>
            <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>
              {item.name}
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
