import GlobalStyle from 'src/assets/theme/GlobalStyles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Comp, Main } from './MainLayoutCSS';

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Comp fluid>
        <Sidebar />
        <Main>{children}</Main>
      </Comp>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
