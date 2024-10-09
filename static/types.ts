import { ReactNode } from 'react';

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



interface ArchiveLayoutProps {
  archive: ReactNode;
  latest: ReactNode;
}

export type { INews, INewsDetailsPage, ArchiveLayoutProps };
