import { createSelector } from '@reduxjs/toolkit';
import { News } from 'src/interfaces/news.interface';
import { NewsState } from '../actionTypes';

/* selector */
export const selectNewsReducer = (state: { news: NewsState }): NewsState => state.news;

export const selectNewsSlices = createSelector([selectNewsReducer], (newsSlices: { news: News[] }) => newsSlices.news);

export const newsLoading = createSelector([selectNewsReducer], (newsSlice) => newsSlice.request.pending);

export const selectNews = createSelector(
  [selectNewsReducer],
  (newsSlice: { news: News[]; request: any }) =>
    newsSlice.request.success &&
    newsSlice.news?.reduce((acc: any, el: News) => {
      acc.push(el);
      return acc;
    }, [])
);

export const selectDisplayType = createSelector(
  [selectNewsReducer],
  (newsSlice: { displayType: string }) => newsSlice.displayType
);
