import Loader from 'src/components/common/Loader/Loader';
import { newsLoading, selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';

const News = () => {
  const news = useAppSelector(selectNews);
  const loading = useAppSelector(newsLoading);

  return (
    <div>
      <h1>News</h1>
      {loading ? <Loader /> : news.map((el: any) => <p>{el.title}</p>)}
    </div>
  );
};

export default News;
