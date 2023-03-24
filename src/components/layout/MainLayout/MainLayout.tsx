import GlobalStyle from 'src/assets/theme/GlobalStyles';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
