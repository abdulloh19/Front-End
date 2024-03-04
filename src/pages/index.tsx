import { t } from "i18next";
import React, { useEffect } from "react";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { HomePageComponent } from "src/pageComponent";

const Home = () => {
  return (
    <div>
      <Seo
        metaTitle={`Sammi | ${t("main_page_title", { ns: "seo" })}`}
        metaDescription={`${t("main_page_description", { ns: "seo" })}`}
      >
        <HomePageComponent />
      </Seo>
    </div>
  );
};

export default withLayout(Home);
