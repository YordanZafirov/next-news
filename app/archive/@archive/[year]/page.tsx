import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

interface FilteredNewsPageProps {
    year: string;
}

const FilteredNewsPage = ({ params }: { params: FilteredNewsPageProps }) => {
    const newsYear = params.year;
    const news = getNewsForYear(+newsYear);

    return ( 
        <NewsList news={news} />
     );
}
 
export default FilteredNewsPage;