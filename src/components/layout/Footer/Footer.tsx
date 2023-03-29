import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';
import { Content, Div } from './FooterCSS';

const Footer = () => {
  const news = useAppSelector(selectNews);
  const { pathname } = useLocation();

  let [value, setState] = useState<boolean>(true);

  const date = new Date().toLocaleTimeString();

  console.log(pathname);

  // force update every second to display current time
  useEffect(() => {
    const interval = setInterval(() => {
      setState(!value);
    }, 1000);

    return () => clearInterval(interval);
  }, [value, useState]);

  return (
    <Div>
      <Content>{date}</Content>
      {pathname !== '/' && <Content>Total No. of articles: {news?.length}</Content>}
    </Div>
  );
};

export default Footer;
