import React from "react";
import { SectionTitleProps } from "./sectionTitle.props";
import { Box, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({ subTitle, title, ...props }: SectionTitleProps): JSX.Element => {
  return (
    <Box {...props}>
      <Heading as={"h3"}>{title}</Heading>
      <Text opacity={".8"} mt={1}>
        {subTitle}
      </Text>
    </Box>
  );
};

export default SectionTitle;
