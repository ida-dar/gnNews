import { News } from 'src/interfaces/news.interface';

export type NewsState = {
  readonly news: News[];
  readonly request: {
    pending: boolean;
    error: Error | null;
    success: boolean;
  };
};

export enum NEWS_ACTION_TYPES {
  FETCH_NEWS = 'news/FETCH_NEWS',
  FETCH_NEWS_START = 'news/FETCH_NEWS_START',
  FETCH_NEWS_FAIL = 'news/FETCH_NEWS_FAIL',
}
