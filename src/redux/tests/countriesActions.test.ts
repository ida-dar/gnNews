import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { COUNTRIES_ACTION_TYPES } from '../actionTypes';
import { fetchCountriesFail, fetchCountriesStart, setCountries } from '../countries/countriesActions';

export const mockStore = configureMockStore([thunkMiddleware]);

test('Should create an action on fetch countries', async () => {
  const countries = [{ cca2: 'string', flag: 'string', name: 'any' }];
  const expectedAction = {
    type: COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES,
    payload: countries,
  };

  expect(setCountries(countries)).toEqual(expectedAction);
});

test('should create a Pending action on fetch countries', () => {
  const store = mockStore();
  store.dispatch(fetchCountriesStart());
  const action = store.getActions();

  expect(action[0]).toEqual({ type: COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_START });
});

test('should create a Fail action on fetch countries', () => {
  const store = mockStore();
  const e = new Error();
  const action = store.getActions();

  store.dispatch(fetchCountriesFail(e));

  const expectedAction = {
    type: COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_FAIL,
    payload: e,
  };

  expect(action[0]).toEqual(expectedAction);
});
