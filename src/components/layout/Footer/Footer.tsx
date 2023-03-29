import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';
import { Content, Div } from './FooterCSS';

const Footer = () => {
  const news = useAppSelector(selectNews);
  let [value, setState] = useState<boolean>(true);

  const date = new Date().toLocaleTimeString();

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
      <Content>Total No. of articles: {news?.length}</Content>
    </Div>
  );
};

export default Footer;
