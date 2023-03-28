import { screen } from '@testing-library/react';
import { NewsState } from 'src/redux/actionTypes';
import renderWithProviders from 'src/utils/test-utils';
import Footer from './Footer';

const previousState: NewsState = {
  news: [
    {
      source: {
        id: 'string',
        name: 'string',
      },
      author: 'string',
      title: 'string',
      description: 'string',
      url: 'string',
      urlToImage: 'string',
      publishedAt: 'string',
      content: 'string',
    },
  ],
  displayType: 'grid',
  request: { pending: false, error: null, success: true },
};

describe('Component Footer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('20 Mar 2023 12:24:32 GMT+1').getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('Should render component without crashing', () => {
    const { container } = renderWithProviders(<Footer />);

    expect(container).toBeInTheDocument();
  });

  test('Should render correct time', () => {
    renderWithProviders(<Footer />);
    const time = screen.getByText(/12:24:32/i);

    expect(time).toBeInTheDocument();
  });
});
