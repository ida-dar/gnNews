import { Container } from 'react-bootstrap';
import GlobalStyle from 'src/assets/theme/GlobalStyles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container fluid>
        <GlobalStyle />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
