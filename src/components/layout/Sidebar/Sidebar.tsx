import { Col, Row } from 'react-bootstrap';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from 'src/redux/utils/hooks';
import { isSidebarOpened, selectCountries } from 'src/redux/countries/countriesSelector';
import { setSidebarOpen } from 'src/redux/countries/countriesActions';
import { fetchNews } from 'src/redux/news/newsRedux';

import { Countries } from 'src/interfaces/countries.interface';
import { Container, CountriesBox, Icon, Nav, Text, Div } from './SidebarCSS';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const opened = useAppSelector(isSidebarOpened);

  const onNewsClick = (el: string) => {
    dispatch(fetchNews(el));
  };

  const onSidebarOpen = (val: boolean) => {
    dispatch(setSidebarOpen(val));
  };

  return (
    <Container isMobileView={opened}>
      {opened && (
        <Div>
          <Col>
            <Text>Countries</Text>
          </Col>
          <Col>
            <Icon icon={faClose} onClick={() => onSidebarOpen(false)} />
          </Col>
        </Div>
      )}
      {countries
        ?.sort((a: Countries, b: Countries) => a.name.localeCompare(b.name))
        ?.map((el: Countries) => (
          <Nav
            to={`/country/${el.name.replaceAll(' ', '-').toLowerCase()}`}
            key={el.cca2}
            onClick={() => onNewsClick(el.cca2)}
          >
            <CountriesBox>
              <p>{el.name}</p>
              <p>{el.flag}</p>
            </CountriesBox>
          </Nav>
        ))}
    </Container>
  );
};

export default Sidebar;
