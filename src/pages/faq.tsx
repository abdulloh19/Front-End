import { t } from "i18next";
import React from "react";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { FaqPageComponent } from "src/pageComponent";

const FaqPage = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("faq_page_title", { ns: "seo" })}`}
      metaDescription={`${t("faq_page_description", { ns: "seo" })}`}
    >
      <FaqPageComponent />
    </Seo>
  );
};

export default withLayout(FaqPage);
