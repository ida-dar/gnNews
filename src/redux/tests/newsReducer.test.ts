import { NewsState } from '../actionTypes';
import reducer from '../news/newsRedux';
import { changeDisplayType, setNews } from '../news/newsActions';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    news: [],
    displayType: 'grid',
    request: { pending: false, error: null, success: false },
  });
});

test('should handle fetching news', () => {
  const previousState: NewsState = {
    news: [],
    displayType: 'grid',
    request: { pending: false, error: null, success: false },
  };

  expect(
    reducer(
      previousState,
      setNews([
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
      ])
    )
  ).toEqual({
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
  });
});

test('should handle displaType change', () => {
  const previousState: NewsState = {
    news: [],
    displayType: 'grid',
    request: { pending: false, error: null, success: false },
  };

  expect(reducer(previousState, changeDisplayType('list'))).toEqual({
    news: [],
    displayType: 'list',
    request: { pending: false, error: null, success: false },
  });
});
