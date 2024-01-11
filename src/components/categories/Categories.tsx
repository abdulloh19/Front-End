import { categories, categoryCorusel } from "src/config/constants";
import SectionTitle from "../sectionTitle/SectionTitle";
import Carousel from "react-multi-carousel";
import { Box, Icon, Text, background, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Categories = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.900");
  const fill = useColorModeValue("#020288", "gray.600");

  return (
    <>
      <SectionTitle title="Top Categories" subTitle="Learin our courses with high rating" />
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
              {item.name}
            </Text>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default Categories;
