import { AnyAction, configureStore, Dispatch, EmptyObject, Middleware, PreloadedState } from '@reduxjs/toolkit';

//reducer
import rootReducer from './globalRedux';

//middleware
import logger from 'redux-logger';

// redux-persist
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['countries'],
};

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean) as Middleware<
  {},
  any,
  Dispatch<AnyAction>
>[];

/* create store */
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureAppStore(preloadedState?: any) {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
    preloadedState,
  });

  return store;
}

const store = configureAppStore();

export const persistedStore = persistStore(store);

export default store;
