import { GetServerSideProps } from "next";
import { ArticleType } from "src/interface/article.interface";
import { language } from "src/interface/constants.interface";
import { withLayout } from "src/layout/Layout";
import { Articles } from "src/services/article.service";

const ArticlesPage = ({ articles }: ArticlePgaeProps) => {
  console.log(articles);

  return <div>ArticlesPage</div>;
};

export default withLayout(ArticlesPage);

export const getServerSideProps: GetServerSideProps<ArticlePgaeProps> = async ({ req }) => {
  const lng: language = req.cookies.i18next as language;
  const articles = await Articles.getArticles(lng);

  return {
    props: { articles },
  };
};

interface ArticlePgaeProps extends Record<string, unknown> {
  articles: ArticleType[];
}
