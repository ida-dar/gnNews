import { AnyAction, configureStore, Dispatch, Middleware } from '@reduxjs/toolkit';

//reducer
import rootReducer from './globalRedux';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const middlewares = [] as Middleware<{}, any, Dispatch<AnyAction>>[];

/* create store */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
