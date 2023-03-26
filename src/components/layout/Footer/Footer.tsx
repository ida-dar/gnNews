import { useEffect, useState } from 'react';
import { selectNews } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';
import { Content, Div } from './FooterCSS';

const Footer = () => {
  const news = useAppSelector(selectNews);

  const date = new Date().toLocaleTimeString();
  let [value, setState] = useState(true);

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
      <Content>No. of articles: {news?.length}</Content>
    </Div>
  );
};

export default Footer;
