import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { newsLoading, selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';

import Loader from 'src/components/common/Loader/Loader';
import NewsList from 'src/components/features/NewsItems/NewsItems';
import { Button, Header, Numbers, Pages } from './NewsCSS';
import { useState } from 'react';

const News = () => {
  const news = useAppSelector(selectNews);
  const loading = useAppSelector(newsLoading);

  const location = useLocation();
  const country = location.pathname.split('/').pop()?.replace('-', ' ');

  const pageSizeOptions = [10, 25, 50, 75, 100];
  const [n, setN] = useState<number>(pageSizeOptions[0]);
  const [activePage, setActivePage] = useState<number>(1);

  const pagesCount = Math.ceil(news.length / n);

  const indexOfLast = activePage * n;
  const indexOfFirst = indexOfLast - n;
  const newsArray = news && news?.slice(indexOfFirst, indexOfLast);

  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((num: number) => {
    return (
      <Numbers key={num}>
        <Button isActive={activePage === num} onClick={() => setActivePage(num)}>
          {num}
        </Button>
      </Numbers>
    );
  });

  return (
    <div>
      <Header>News from {country}</Header>
      {news && (
        <div>
          No. of news per page:{' '}
          {pageSizeOptions.map((el) => (
            <Button onClick={() => setN(el)} isActive={n === el} key={el}>
              {el}
            </Button>
          ))}
          <Pages>{pageNumbers.length > 1 && renderPageNumbers}</Pages>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <NewsList news={newsArray} />
        </Row>
      )}
    </div>
  );
};

export default News;
