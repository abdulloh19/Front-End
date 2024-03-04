import { t } from "i18next";
import React from "react";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { AboutPageComponent } from "src/pageComponent";

const AboutPage = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("about_page_title", { ns: "seo" })}`}
      metaDescription={`${t("about_page_description", { ns: "seo" })}`}
    >
      <AboutPageComponent />
    </Seo>
  );
};

export default withLayout(AboutPage);
