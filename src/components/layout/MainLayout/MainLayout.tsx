import { Container } from 'react-bootstrap';
import GlobalStyle from 'src/assets/theme/GlobalStyles';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <Container fluid>
      <GlobalStyle />
      <Header />
    </Container>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
