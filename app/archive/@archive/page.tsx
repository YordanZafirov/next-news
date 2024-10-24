import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const ArchivePage = () => {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>
                <a>{link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
