import { ArchiveLayoutProps } from "@/static/types";

const ArchiveLayout = ({ archive, latest }: ArchiveLayoutProps) => {
  return (
    <div>
      <h1>Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-news">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
