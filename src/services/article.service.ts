import { Lenguage } from "./../interface/constants.interface";
import { gql, request } from "graphql-request";
import { ArticleType } from "src/interface/article.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
  async getArticles(lng: Lenguage) {
    const query = gql`
      query Articles($lng: Lenguage) {
        articlies(where: { lenguage: $lng }) {
          createdAt
          id
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
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ articlies: ArticleType[] }>(graphqlAPI, query, { lng });
    return result.articlies;
  },

  async getDetailedArticle(slug: string) {
    const query = gql`
      query DeatiledArticle($slug: String!) {
        articly(where: { slug: $slug  }) {
          createdAt
          id
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
          description {
            text
            raw
          }
        }
      }
    `;
    const result = await request<{ articly: ArticleType }>(graphqlAPI, query, { slug });
    return result.articly;
  },
};
