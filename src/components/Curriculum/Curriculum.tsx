import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { t } from "i18next";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { getLessonTime } from "src/helpers/time.helpers";

const Curriculum = () => {
  return (
    <>
      <Heading mt={10}>{t("curriculum", {ns: "courses"})}</Heading>
      <Flex gap={2} mt={3} align={"center"}>
        {data.length} {t("modules", {ns: "courses"})} <Icon as={FaDotCircle} w={3} h={3} />
        {data.map((c) => c.lessons.length).reduce((a, b) => +a + +b, 0)} {t("lessons", {ns: "courses"})}
      </Flex>
      <Accordion defaultIndex={[0]} allowToggle mr={2}>
        {data.map((m) => (
          <AccordionItem key={m.title} border={"1px solid facebook.500"} borderRadius={"8px"} mt={5}>
            <AccordionButton
              height={"60px"}
              background={useColorModeValue("facebook.500", "facebook.200")}
              color={useColorModeValue("white", "black")}
              borderRadius={"sm"}
              _hover={{
                background: "facebook.300",
              }}
              fontWeight={"bold"}
            >
              <Box flex={1} textAlign={"left"}>
                <AccordionIcon />
                {m.title}
              </Box>
              <Flex flex={0}>
                <Text fontSize={"sm"}>{m.lessons.length}ta&nbsp;dars</Text>
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4}>
              {m.lessons.map((lesson) => (
                <Flex cursor={"pointer"} key={lesson.name} justify={"space-between"} align={"center"} py={2}>
                  <Flex align={"center"} gap={2} w={"80%"}>
                    <Icon as={AiFillPlayCircle} color={"gray.600"} w={7} h={7} />
                    <Text>{lesson.name}</Text>
                  </Flex>
                  <Text fontSize={"sm"}>{getLessonTime(lesson.hour, lesson.minutes, lesson.seconds)}</Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Curriculum;

const data = [
  {
    title: "1-modul kursga kirish",
    lessons: [
      {
        name: "#1. Samarali kursni tugatish",
        hour: 0,
        minutes: 8,
        seconds: 59,
      },
      {
        name: "#2. Kod muharririni sozlash, VSCode",
        hour: 0,
        minutes: 12,
        seconds: 23,
      },
      {
        name: "#3. JSHint bilan ishlash",
        hour: 0,
        minutes: 13,
        seconds: 16,
      },
    ],
  },
  {
    title: "2-modul. JavaScript asoslari",
    lessons: [
      {
        name: "#4. javaScript nima?",
        hour: 0,
        minutes: 18,
        seconds: 20,
      },
      {
        name: "#5. O'zgaruvchilar nima",
        hour: 0,
        minutes: 22,
        seconds: 20,
      },
      {
        name: "#6. Qat'iy rejim",
        hour: 0,
        minutes: 5,
        seconds: 25,
      },
    ],
  },
  {
    title: "3-modul. JavaScript loyiha",
    lessons: [
      {
        name: "#35. Classlist",
        hour: 0,
        minutes: 11,
        seconds: 44,
      },
      {
        name: "#36. Delegatsiya",
        hour: 0,
        minutes: 11,
        seconds: 39,
      },
      {
        name: "#37. Loyiha, Tab",
        hour: 0,
        minutes: 18,
        seconds: 4,
      },
    ],
  },
];
