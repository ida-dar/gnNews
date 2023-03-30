import { Container, Title } from './HomeCSS';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to gnNews app</Title>
      <div>
        The app displays breaking headlines for a selected country from the list on the left. Articles are sorted by the
        earliest date published first. The news are fetched from a public <a href="https://newsapi.org/">News API</a>.
        <p>
          The list of countries is fetched from the public
          <a href="https://restcountries.com/#rest-countries"> REST Countries API</a>.
        </p>
      </div>
      <p>The news may be displayed as a list or in a grid system (change display in header).</p>
      <p>
        Maximum amount of fetched news from the News API is 100. They may be divided into pages with specific amount of news
        on a page.
      </p>
    </Container>
  );
};

export default Home;
