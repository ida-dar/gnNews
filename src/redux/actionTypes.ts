import { Countries } from 'src/interfaces/countries.interface';
import { News } from 'src/interfaces/news.interface';

// news
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

// countries
export type CountriesState = {
  readonly countries: Countries[];
  readonly request: {
    pending: boolean;
    error: Error | null;
    success: boolean;
  };
};

export enum COUNTRIES_ACTION_TYPES {
  FETCH_COUNTRIES = 'countries/FETCH_COUNTRIES',
  FETCH_COUNTRIES_START = 'countries/FETCH_COUNTRIES_START',
  FETCH_COUNTRIES_FAIL = 'countries/FETCH_COUNTRIES_FAIL',
}
