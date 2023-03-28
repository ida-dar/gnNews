import { screen } from '@testing-library/react';
import App from './App';
import renderWithProviders from './utils/test-utils';

test('Renders gnNews text', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/gnNews/);

  expect(linkElement).toBeInTheDocument();
});
