import { t } from "i18next";
import React from "react";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { ContactPageComponent } from "src/pageComponent";

const ContactPage = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("contact_page_title", { ns: "seo" })}`}
      metaDescription={`${t("contact_page_description", { ns: "seo" })}`}
    >
      <ContactPageComponent />
    </Seo>
  );
};

export default withLayout(ContactPage);
