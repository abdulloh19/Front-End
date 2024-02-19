export interface ArticleType {
  createdAt: string;
  excerpt: string;
  id: string;
  image: {
    url: string;
  };
  slug: string;
  title: string;
  author: AuthorType;
  lenguage: string;
  description: {
    text: string;
    raw: [];
  };
}

export interface AuthorType {
  name: string;
  avatar: {
    url: string;
  };
}
