import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const Newsletter = () => {
  return (
    <Card>
      <CardBody minH={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={3}>
          <SectionTitle
            textAlign={"center"}
            maxW={"container.sm"}
            title="Subscribe our Newsletter &"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Box position={"relative"}>
            <Input w={"full"} h={14} bg={"white"} color={"gray.900"} placeholder="Your Email..." _placeholder={{ color: "gray.500" }} />
            <Button position={'absolute'} colorScheme="facebook" zIndex={99} right={2} top={2}>Submit</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Newsletter;
