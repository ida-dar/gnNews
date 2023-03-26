import { combineReducers } from '@reduxjs/toolkit';

// reducers
import newsReducer from './news/newsRedux';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
