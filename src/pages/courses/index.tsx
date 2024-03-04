import { t } from "i18next";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { CoursesPageComponent } from "src/pageComponent";

const courses = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("course_page_title", { ns: "seo" })}`}
      metaDescription={`${t("course_page_description", { ns: "seo" })}`}
    >
      <CoursesPageComponent />
    </Seo>
  );
};

export default withLayout(courses);
