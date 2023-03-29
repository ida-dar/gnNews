import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { DisplayType, News } from 'src/interfaces/news.interface';
import { NewsState, NEWS_ACTION_TYPES } from '../actionTypes';
import { fetchNewsFail, fetchNewsStart, setNews } from './newsActions';

// state
const initialState: NewsState = {
  news: [] as News[],
  displayType: DisplayType.GRID,
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: false as boolean,
  },
};

// reducer
export const fetchNews = (countryCode: string) => async (dispatch: Dispatch) => {
  dispatch(fetchNewsStart());

  try {
    // Requests from the browser are not allowed on the Developer plan, except from localhost.
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=100&country=${countryCode}&apiKey=85d0a27298084d9ebe5d3cd1cb6ffd64`
    );
    dispatch(setNews(resp.data.articles));
  } catch (e) {
    dispatch(fetchNewsFail(e));
  }
};

const reducer = (state = initialState, action = {} as AnyAction) => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_START:
      return {
        ...state,
        news: action.payload,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_FAIL:
      return {
        ...state,
        news: action.payload,
        request: {
          pending: false,
          error: action.payload,
          success: false,
        },
      };
    case NEWS_ACTION_TYPES.CHANGE_DISPLAY_TYPE:
      return {
        ...state,
        displayType: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
