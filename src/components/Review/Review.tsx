import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import { t } from "i18next";
import ReactStars from "react-stars";
import Cookies from "js-cookie";
import { enUS, ru, tr, uz } from "date-fns/locale";

const Review = () => {
  const getLocalLenguage = () => {
    const lng = Cookies.get("i18next");
    if (lng == "tr") {
      return tr;
    }
    if (lng == "en") {
      return enUS;
    }
    if (lng == "uz") {
      return uz;
    }
    if (lng == "ru") {
      return ru;
    }
  };
  return (
    <>
      <Heading mt={10}>{t("review", { ns: "courses" })}</Heading>
      {data.map((item, idx) => (
        <Flex key={idx} gap={4} mt={6} borderBottomWidth={"1px"} pb={2}>
          <Avatar
            bg={useColorModeValue("gray.200", "gray.600")}
            display={{ base: "none", md: "block" }}
            size={"md"}
          />
          <Box>
            <Flex align={"center"} gap={2} mt={1}>
              <Text fontWeight={"bold"}>{item.name}</Text>
              <Text>
                {formatDistance(new Date("20:20:2024"), new Date(), {
                  locale: getLocalLenguage(),
                })}{" "}
                {t("ago", { ns: "courses" })}
              </Text>
            </Flex>
            <ReactStars edit={false} value={Number(item.rating)} />
            <Text mt={3}>{item.summary}</Text>
          </Box>
        </Flex>
      ))}
      <Center mt={5}>
        {data.length >= 5 && (
          <Button size={"sm"} colorScheme="facebook" variant={"outline"} fontWeight={"bold"}>
            {t("more", { ns: "courses" })}...
          </Button>
        )}
      </Center>
    </>
  );
};

export default Review;

const data = [
  {
    name: "Aziz Rahimov",
    rating: "5",
    summary: "raxmat",
  },
  {
    name: "Azizjon Mustafoyev",
    rating: "5",
    summary: "kurs ajoyib raxmat",
  },
  {
    name: "Nurillo Mahmudjonov",
    rating: "5",
    summary: "aka kotta raxmat kursjdan ancha narsa o'rgandim",
  },
  {
    name: "Aziz Fahriddin o'g'li",
    rating: "5",
    summary: "raxmat",
  },
  {
    name: "Ulug'bek nazrullayev",
    rating: "5",
    summary: "respect",
  },
];
