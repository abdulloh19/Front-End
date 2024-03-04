import { t } from "i18next";
import { GetServerSideProps } from "next";
import { ArticleType } from "src/interface/article.interface";
import { Lenguage } from "src/interface/constants.interface";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { ArticlePageComponent } from "src/pageComponent";
import { Articles } from "src/services/article.service";

const ArticlesPage = ({ articles }: ArticlePgaeProps) => {
  console.log(articles);

  return (
    <Seo
      metaTitle={`Sammi | ${t("article_page_title", { ns: "seo" })}`}
      metaDescription={`${t("article_page_description", { ns: "seo" })}`}
    >
      <ArticlePageComponent articles={articles} />
    </Seo>
  );
};

export default withLayout(ArticlesPage);

export const getServerSideProps: GetServerSideProps<ArticlePgaeProps> = async ({
  req,
}) => {
  const lng: Lenguage = req.cookies.i18next as Lenguage;
  const articles = await Articles.getArticles(lng);

  return {
    props: { articles },
  };
};

interface ArticlePgaeProps extends Record<string, unknown> {
  articles: ArticleType[];
}
