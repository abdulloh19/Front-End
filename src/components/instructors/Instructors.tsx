import { Box, Flex, Grid, GridItem, HStack, Heading, Icon, Image, Stack, Text, textDecoration } from "@chakra-ui/react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillAlipayCircle, AiOutlineAlipayCircle, AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Instructors = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("instructor_title", { ns: "home" })} subTitle={t("instructor_description", { ns: "home" })} />

      <Grid gap={3} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }} mt={5}>
        {data.map((item, idx) => (
          <GridItem key={idx}>
            <Stack spacing={3}>
              <Image src={item.avatar} alt={item.firstName} borderRadius={"lg"} h={"300px"} objectFit={"cover"} />
              <Heading fontSize={"xl"}>
                {item.firstName} {item.lastName}
              </Heading>
              <Text color={"gray.500"}>{item.job}</Text>
              <HStack opacity={".6"}>
                <Flex align={"center"} gap={1}>
                  <Icon as={FaUserGraduate} />
                  <Text>{item.students} students</Text>
                </Flex>
                <Flex align={"center"} gap={1}>
                  <Icon as={AiOutlinePlayCircle} />
                  <Text>{item.courses} courses</Text>
                </Flex>
              </HStack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Text align={"center"}>
        {t("instructor_link_title", { ns: "home" })}{" "}
        <Box as="span" color={"teal"} _hover={{ textDecoration: "underline" }}>
          <Link href={"/become-instructor"}>{t("instructor_link_router", { ns: "home" })}</Link>
        </Box>
      </Text>
    </>
  );
};

export default Instructors;

const data = [
  {
    firstName: "Samar",
    lastName: "Badrddinov",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Samar",
    lastName: "Badrddinov",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Samar",
    lastName: "Badrddinov",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Samar",
    lastName: "Badrddinov",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
];
