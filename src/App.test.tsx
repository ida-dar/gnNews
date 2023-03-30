import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

window.scrollTo = jest.fn();

describe('App component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should render crashing', () => {
    const { container } = renderWithProviders(<App />);

    expect(container).toBeInTheDocument();
  });

  test('Renders gnNews text', () => {
    renderWithProviders(<App />);
    const linkElement = screen.getByText(/gnNews app/);

    expect(linkElement).toBeInTheDocument();
  });
});
