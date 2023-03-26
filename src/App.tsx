import { useEffect } from 'react';

// redux
import { useAppDispatch } from './redux/utils/hooks';
import { fetchNews } from './redux/news/newsRedux';

// router
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// routes
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';

interface RoutesInterface {
  path: string;
  element: JSX.Element;
}

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const routes: RoutesInterface[] = [
    {
      path: '/',
      element: <Home />,
    },
  ];

  return (
    <BrowserRouter>
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
