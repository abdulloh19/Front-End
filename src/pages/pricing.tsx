import { t } from "i18next";
import React from "react";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { PricingPageComponent } from "src/pageComponent";

const PricingPage = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("pricing_page_title", { ns: "seo" })}`}
      metaDescription={`${t("pricing_page_description", { ns: "seo" })}`}
    >
      <PricingPageComponent />
    </Seo>
  );
};

export default withLayout(PricingPage);
