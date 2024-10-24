import { INews, NewsListProps } from "@/static/types";
import Image from "next/image";
import Link from "next/link";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="news-list">
      <ul className="news-list">
        {news.map((newsItem: INews) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default NewsList;
