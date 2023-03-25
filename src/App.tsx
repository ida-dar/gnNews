// routes
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes></Routes>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
