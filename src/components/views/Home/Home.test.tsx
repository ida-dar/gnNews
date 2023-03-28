import renderWithProviders from 'src/utils/test-utils';

import Home from './Home';

test('Should render Home component without crashing', () => {
  const { container } = renderWithProviders(<Home />);

  expect(container).toBeInTheDocument();
});

test('Should have correct News API link', () => {
  const { getByRole } = renderWithProviders(<Home />);
  const link = getByRole('link', { name: 'News API' });

  expect(link).toHaveAttribute('href', 'https://newsapi.org/');
});
