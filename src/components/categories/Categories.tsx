import { categories } from "src/config/constants";
import SectionTitle from "../sectionTitle/SectionTitle";
import Carousel from "react-multi-carousel";
import { Box, Icon, Text, background, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { categoryCorusel } from "src/config/carousel";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const backgroundColor = useColorModeValue("gray.200", "gray.900");
  const fill = useColorModeValue("#020288", "gray.600");
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("category_title", { ns: "home" })} subTitle={t("category_description", { ns: "home" })} />
      <Carousel responsive={categoryCorusel} showDots={false} arrows={false} autoPlay={true} autoPlaySpeed={2000} infinite>
        {categories.map((item) => (
          <Box
            key={item.id}
            minH={"200px"}
            mx={2}
            backgroundColor={backgroundColor}
            p={5}
            textAlign={"center"}
            borderRadius={"lg"}
            cursor={"pointer"}
          >
            <Icon as={item.icon} w={20} h={20} fill={fill} />
            <Text mt={2} fontSize={"lg"}>
              {t(item.name, { ns: "home" })}
            </Text>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default Categories;
