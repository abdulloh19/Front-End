import { t } from "i18next";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { BooksPageComponent } from "src/pageComponent";

const Books = () => {
  return (
    <Seo
      metaTitle={`Sammi | ${t("books_page_title", { ns: "seo" })}`}
      metaDescription={`${t("books_page_description", { ns: "seo" })}`}
    >
      <BooksPageComponent />
    </Seo>
  );
};

export default withLayout(Books);
