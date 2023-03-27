import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { newsLoading, selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';

import Loader from 'src/components/common/Loader/Loader';
import NewsList from 'src/components/features/NewsItems/NewsItems';
import { Header } from './NewsCSS';

const News = () => {
  const news = useAppSelector(selectNews);
  const loading = useAppSelector(newsLoading);

  const location = useLocation();
  const country = location.pathname.split('/').pop()?.replace('-', ' ');

  return (
    <div>
      <Header>News from {country}</Header>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <NewsList news={news} />
        </Row>
      )}
    </div>
  );
};

export default News;
