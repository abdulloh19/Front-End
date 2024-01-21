import React from "react";
import { popularCoursesCardProps } from "./popularCoursesCard.props";
import { Divider, Flex, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { CiViewList } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { useTranslation } from "react-i18next";

const PopularCoursesCard = ({ item }: popularCoursesCardProps) => {
    const {t} = useTranslation()
  return (
    <Stack key={item.title} p={3} cursor={"pointer"} spacing={3}>
      <Image src={item.image} alt={item.title} objectFit={"cover"} h={"210px"} w={"300px"} width={"full"} borderRadius={"lg"} />
      <HStack>
        <Text color={"#e59819"}>{t(item.reviewAvarage.toFixed(1), { ns: "home" })}</Text>
        <ReactStars edit={true} color2="#e59819" value={item.reviewAvarage} />
        <Text opacity={".8"}>({item.reviewCount})</Text>
      </HStack>
      <Heading fontSize={"xl"}>{item.title}</Heading>
      <HStack>
        <Flex align={"center"} gap={1}>
          <Icon as={CiViewList} />
          <Text>{item.lessonCount} Lesson</Text>
        </Flex>
        <Flex align={"center"} gap={1}>
          <Icon as={AiOutlineClockCircle} />
          <Text>{item.totalHour} Hour</Text>
        </Flex>
        <Flex align={"center"} gap={1}>
          <Icon as={SiGoogleanalytics} />
          <Text>{item.level}</Text>
        </Flex>
      </HStack>
      <Divider />
      <Flex justifyContent={"space-between"} align={"center"}>
        <HStack align={"center"}>
          <Image src={item.author.avatar} alt={item.author.firstName} w={50} h={50} borderRadius={"full"} />
          <Text>
            {item.author.firstName} {item.author.lastName[0]}.
          </Text>
        </HStack>
        <Text>{item.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>
      </Flex>
    </Stack>
  );
};

export default PopularCoursesCard;
