interface INews {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

interface INewsDetailsPage {
  params: {
    id: string;
  };
}

export type { INews, INewsDetailsPage };