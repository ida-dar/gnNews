import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewsState, NEWS_ACTION_TYPES } from '../actionTypes';
import { fetchNewsFail, fetchNewsStart, setNews } from './newsActions';

// state
const initialState: NewsState = {
  news: [],
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: false as boolean,
  },
};

// reducer
export const fetchNews = () => async (dispatch: Dispatch) => {
  dispatch(fetchNewsStart());

  try {
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    dispatch(setNews(resp.data.articles));
    console.log(resp.data.articles);
  } catch (e) {
    dispatch(fetchNewsFail(e));
  }
};

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  console.log(action);
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
    default:
      return state;
  }
};

export default reducer;