import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { BsCheck } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";

const Overview = () => {
  const whatYouLearn = "AJAX, JavaScript, Fetch, OOP, API, JSON, Promise, SSR";
  const requirement = "Basic HTML, Css JavaScript, SASS, Advanced API";
  return (
    <>
      <Heading mt={10}>{t("overview", {ns: "courses"})}</Heading>
      <Text mt={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magnam voluptas blanditiis harum? Rem,
        quisquam molestiae cupiditate laborum, sed nesciunt unde exercitationem ab cum ad architecto velit
        possimus, iste fugiat alias quis magni ipsam animi amet tenetur reprehenderit officiis. Laborum!
      </Text>
      <Heading mt={10}>{t("what_you_will_learn", {ns: "courses"})}</Heading>
      <Grid mt={5} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
        {whatYouLearn.split(", ").map((text, idx) => (
          <Flex key={idx} gap={3} align={"center"} my={1}>
            <Icon as={BsCheck} w={6} h={6} p={1} />
            <Text>{text}</Text>
          </Flex>
        ))}
      </Grid>
      <Heading mt={10}>{t("required", {ns: "courses"})}</Heading>
      {requirement.split(", ").map((text, idx) => (
        <Flex key={idx} gap={3} align={"center"}>
          <Icon as={FaDotCircle} w={3} h={3} />
          <Text>{text}</Text>
        </Flex>
      ))}
    </>
  );
};

export default Overview;
