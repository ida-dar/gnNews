import { useEffect } from 'react';

// redux
import { useAppDispatch } from './redux/utils/hooks';
import { fetchCountries } from './redux/countries/countriesRedux';

// router
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// routes
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import News from './components/views/News/News';
import PageToTop from './components/common/PageToTop/PageToTop';

interface RoutesInterface {
  path: string;
  element: JSX.Element;
}

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const routes: RoutesInterface[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/country/:name',
      element: <News />,
    },
  ];

  return (
    <BrowserRouter>
      <PageToTop />
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={`${process.env.PUBLIC_URL}${route.path}`} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
