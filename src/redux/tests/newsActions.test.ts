import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { NEWS_ACTION_TYPES } from '../actionTypes';
import { fetchNewsFail, fetchNewsStart, setNews } from '../news/newsActions';

export const mockStore = configureMockStore([thunkMiddleware]);

test('Should create an action on fetch news', async () => {
  const news = [
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
  ];
  const expectedAction = {
    type: NEWS_ACTION_TYPES.FETCH_NEWS,
    payload: news,
  };

  expect(setNews(news)).toEqual(expectedAction);
});

test('should create a Pending action on fetch news', () => {
  const store = mockStore();
  store.dispatch(fetchNewsStart());
  const action = store.getActions();

  expect(action[0]).toEqual({ type: NEWS_ACTION_TYPES.FETCH_NEWS_START });
});

test('should create a Fail action on fetch news', () => {
  const store = mockStore();
  const e = new Error();
  const action = store.getActions();

  store.dispatch(fetchNewsFail(e));

  const expectedAction = {
    type: NEWS_ACTION_TYPES.FETCH_NEWS_FAIL,
    payload: e,
  };

  expect(action[0]).toEqual(expectedAction);
});
