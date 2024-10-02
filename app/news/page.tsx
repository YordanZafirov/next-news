import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/1">News 1</Link>
        </li>
        <li>
          <Link href="/news/2">News 2</Link>
        </li>
        <li>
          <Link href="/news/3">News 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
