import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactStars from "react-stars";
import SectionTitle from "src/components/sectionTitle/SectionTitle";
import { courses, coursesFilter } from "src/config/constants";
import { FilterItemProps } from "./categoryPageComponent.props";
import AllCoursesCard from "src/components/allCoursesCard/AllCoursesCard";
import { useTranslation } from "react-i18next";

const CoursesPageComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("title", { ns: "courses" })} subTitle={t("description", { ns: "courses" })} />

      <Box position={"relative"} mt={5}>
        <Input
          w={"full"}
          h={14}
          bg={"white"}
          borderColor={useColorModeValue("gray.300", "gray.900")}
          placeholder={t("search_input_placeholder", { ns: "courses" }) || ""}
          _placeholder={{ color: "gray.500" }}
        />
        <Button position={"absolute"} colorScheme="facebook" zIndex={99} right={2} top={2}>
          {t("search_input_btn", { ns: "courses" })}
        </Button>
      </Box>
      <Flex mt={5} gap={5} direction={{ base: "column", lg: "row" }}>
        <Box
          w={{ base: "100%", lg: "30%" }}
          height={"fit-content"}
          p={5}
          border={"1px"}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius={"lg"}
        >
          {coursesFilter.map((item, idx) => (
            <FilterItem key={item.id} item={item} idx={idx} />
          ))}
        </Box>
        <Box w={{ base: "100%", lg: "70%" }}>
          {courses.map((item) => (
            <AllCoursesCard key={item.title} course={item} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default CoursesPageComponent;

const FilterItem = ({ item, idx }: { item: FilterItemProps; idx: number }) => {
  const { t } = useTranslation();
  const renderFilterItem = () => (
    <>
      {item.categoryList.map((c) => (
        <Radio value={c.id} key={c.id}>
          <Flex>
            {item.id === "rating" && <ReactStars value={Number(c.id)} edit={false} color2="#e59819" />}
            {t(c.name, { ns: "courses" })}
          </Flex>
        </Radio>
      ))}
    </>
  );
  return (
    <Accordion key={item.id} allowToggle defaultIndex={idx === 0 ? 0 : idx}>
      <AccordionItem>
        <AccordionButton>
          <Text fontSize={"xl"} flex="1" textAlign="left">
            {t(item.title, { ns: "courses" })}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <RadioGroup>
            <Stack>{renderFilterItem()}</Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
