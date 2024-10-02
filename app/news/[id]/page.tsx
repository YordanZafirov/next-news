import { DUMMY_NEWS } from "@/dummy-news";
import { INewsDetailsPage } from "@/static/types";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailsPage = ({ params }: INewsDetailsPage) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title || "News image"}
        />
        <h1>{newsItem.title}</h1>
        <time>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
