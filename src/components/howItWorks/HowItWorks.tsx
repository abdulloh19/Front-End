import { Box, Flex, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { FinishRightIcon, OnlineCourseIcon, OnlineLearningIcon, OnlineStudentIcon, RightLineIcon } from "src/icons";
import { Fragment } from "react";

const HowItWorks = () => {
  const backgroundColor = useColorModeValue("gray.300", "gray.700");
  return (
    <>
      <SectionTitle textAlign={"center"} title="How it works?" subTitle="10,000+ unique online course list designs" />

      <SimpleGrid mt={10} columns={5} textAlign={"center"} spacing={10}>
        {data.map((item, idx) => {
          const odd = idx % 2;

          return (
            <Fragment key={idx}>
              {!odd ? (
                <Stack justify={"center"} align={"center"}>
                  <Flex w={100} h={100} justify={"center"} align={"center"} backgroundColor={backgroundColor} borderRadius={"full"}>
                    {item.icon}
                  </Flex>
                  <Text textAlign={"center"}>{item.title}</Text>
                </Stack>
              ) : (
                <Stack justify={"center"}>{item.icon}</Stack>
              )}
            </Fragment>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default HowItWorks;

const data = [
  { title: "Signup Platform", icon: <OnlineCourseIcon /> },
  { icon: <RightLineIcon /> },
  { title: "Find Courses", icon: <OnlineLearningIcon /> },
  { icon: <FinishRightIcon /> },
  { title: "Learn Relaxing", icon: <OnlineStudentIcon /> },
];
