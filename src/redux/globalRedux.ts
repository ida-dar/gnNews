import { combineReducers } from '@reduxjs/toolkit';

// reducers
import newsReducer from './news/newsRedux';
import countriesReducer from './countries/countriesRedux';

const rootReducer = combineReducers({
  news: newsReducer,
  countries: countriesReducer,
});

export default rootReducer;
