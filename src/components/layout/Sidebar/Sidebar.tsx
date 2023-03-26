import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/utils/hooks';
import { selectCountries } from 'src/redux/countries/countriesSelector';
import { fetchNews } from 'src/redux/news/newsRedux';
import { Countries } from 'src/interfaces/countries.interface';
import { Container, CountriesBox, Nav } from './SidebarCSS';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);

  const onNewsClick = (el: string) => {
    dispatch(fetchNews(el));
  };

  console.log(countries);
  return (
    <Container>
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
