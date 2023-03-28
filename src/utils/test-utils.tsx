import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppStore, configureAppStore, RootState } from 'src/redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = configureAppStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  // const store = mockStore(initialState);
  const mocked = configureAppStore(store);

  // console.log(initialState);

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
