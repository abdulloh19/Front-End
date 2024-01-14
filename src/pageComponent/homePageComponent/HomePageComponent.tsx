import { Stack } from "@chakra-ui/react";
import React from "react";
import { Categories, Hero, HowItWorks, Instructors, Newsletter, PopularCourses, Sposorship, Testimonilas } from "src/components";

const HomePageComponent = () => {
  return (
    <Stack spacing={10}>
      <Hero />
      <Categories />
      <PopularCourses />
      <HowItWorks />
      <Instructors />
      <Testimonilas />
      <Newsletter />
      <Sposorship />
    </Stack>
  );
};

export default HomePageComponent;
