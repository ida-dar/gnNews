import { News } from 'src/interfaces/news.interface';
import { NEWS_ACTION_TYPES } from '../actionTypes';
import { createAction } from '../utils/createAction';

// actions
export const setNews = (news: News[]) => createAction(NEWS_ACTION_TYPES.FETCH_NEWS, news);

export const fetchNewsStart = () => createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START);

export const fetchNewsFail = (e: any) => createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAIL, e);

export const changeDisplayType = (type: string) => createAction(NEWS_ACTION_TYPES.CHANGE_DISPLAY_TYPE, type);
