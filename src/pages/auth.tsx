import { t } from "i18next";
import React from "react";
import Seo from "src/layout/seo/seo";
import { AuthPageComponent } from "src/pageComponent";

const AuthPage = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("auth_page_title", { ns: "seo" })}` || "Sammi | Auth"}
      metaDescription={
        `${t("auth_page_description", { ns: "seo" })}` ||
        "Login or create your account for using sammi platform"
      }
    >
      <AuthPageComponent />
    </Seo>
  );
};

export default AuthPage;
