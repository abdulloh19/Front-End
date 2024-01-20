import Carousel from "react-multi-carousel";
import SectionTitle from "../sectionTitle/SectionTitle";
import { trustedCompeny } from "src/config/constants";
import { Icon } from "@chakra-ui/react";
import { sponsorShipCarousel } from "src/config/carousel";
import { useTranslation } from "react-i18next";

const Sposorship = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title="" subTitle={t("sponsor_title", { ns: "home" })} textAlign={"center"} mb={5} />
      <Carousel responsive={sponsorShipCarousel} arrows={false} showDots={false} autoPlay={true} autoPlaySpeed={1000} infinite>
        {trustedCompeny.map((item, idx) => (
          <Icon as={item} key={idx} fontSize={50} mx={{ base: 20 }} />
        ))}
      </Carousel>
    </>
  );
};

export default Sposorship;
