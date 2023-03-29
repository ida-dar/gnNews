import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { newsLoading, selectNews } from 'src/redux/news/newsSelector';
import { useAppDispatch, useAppSelector } from 'src/redux/utils/hooks';
import { setSidebarOpen } from 'src/redux/countries/countriesActions';

import Loader from 'src/components/common/Loader/Loader';
import Button from 'src/components/common/Button/Button';
import NewsList from 'src/components/features/NewsItems/NewsItems';
import { Btn, Header, Numbers, Pages } from './NewsCSS';
import { useState } from 'react';

const News = () => {
  const dispatch = useAppDispatch();
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
        <Btn isActive={activePage === num} onClick={() => setActivePage(num)}>
          {num}
        </Btn>
      </Numbers>
    );
  });

  const onSidebarOpen = (val: boolean) => {
    dispatch(setSidebarOpen(val));
  };

  return (
    <Row>
      {
        <Button
          onClick={() => onSidebarOpen(true)}
          text={'List of countries'}
          width={'250px'}
          margin={'24px auto'}
          displayMedia={'none'}
        />
      }
      <Header>News from {country}</Header>
      {news && (
        <div>
          No. of news per page:{' '}
          {pageSizeOptions.map((el) => (
            <Btn onClick={() => setN(el)} isActive={n === el} key={el}>
              {el}
            </Btn>
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
      <div>
        <Pages>{pageNumbers.length > 1 && renderPageNumbers}</Pages>
      </div>
    </Row>
  );
};

export default News;
