import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from 'src/utils/test-utils';
import Footer from './Footer';

describe('Component Footer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('20 Mar 2023 12:24:32 GMT+1').getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('Should render component without crashing', () => {
    const { container } = renderWithProviders(
      <Router>
        <Footer />
      </Router>
    );

    expect(container).toBeInTheDocument();
  });

  test('Should render correct time', () => {
    renderWithProviders(
      <Router>
        <Footer />
      </Router>
    );
    const time = screen.getByText(/12:24:32/i);

    expect(time).toBeInTheDocument();
  });
});
