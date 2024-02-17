import { language } from "../interface/constants.interface";
import { gql, request } from "graphql-request";
import { ArticleType } from "src/interface/article.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
  async getArticles(lng: language) {
    const query = gql`
      query Articles($lng: lenguage) {
        articlies(where: { lenguage: $lng }) {
          title
          excerpt
          slug
          image {
            url
          }
          lenguage
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await request<{ articles: ArticleType[] }>(graphqlAPI, query, { lng });
    return result.articles;
  },
};
