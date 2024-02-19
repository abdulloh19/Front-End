import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import { ArticleType } from "src/interface/article.interface";
import { Lenguage } from "src/interface/constants.interface";
import { withLayout } from "src/layout/Layout";
import { ArticleDetailedComponent } from "src/pageComponent";
import { Articles } from "src/services/article.service";

const ArticlesDetailPage = ({ article }: ArticleDetailedPageProps) => {
  console.log(article);

  return <ArticleDetailedComponent article={article} />;
};

export default withLayout(ArticlesDetailPage);

export const getServerSideProps: GetServerSideProps<ArticleDetailedPageProps> = async ({ query, req }) => {
  const slug = query.slug as string;
  const lng: Lenguage = req.cookies.i18next as Lenguage;
  const article = await Articles.getDetailedArticle(slug);

  if (article.lenguage == lng) {
    return {
      props: { article },
    };
  }
  return {
    redirect: {
      destination: "/articles",
      permanent: false
    },
  };
};

interface ArticleDetailedPageProps extends Record<string, unknown> {
  article: ArticleType;
}
