import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Carousel from "react-multi-carousel";
import { Divider, Flex, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { CiViewList } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { courseCorusel } from "src/config/carousel";
import { useTranslation } from "react-i18next";
import { courses } from "src/config/constants";
import PopularCoursesCard from "../popularCoursesCard/PopularCoursesCard";

const PopularCourses = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("popular_courses_title", { ns: "home" })} subTitle={t("popular_courses_description", { ns: "home" })} />
      <Carousel responsive={courseCorusel} showDots={false} arrows={false} autoPlay={true} autoPlaySpeed={5000} infinite>
        {courses.map((item) => (
          <PopularCoursesCard item={item} key={item.title} />
        ))}
      </Carousel>
    </>
  );
};

export default PopularCourses;
