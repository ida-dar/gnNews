import { CountriesState } from '../actionTypes';
import { setCountries, setSidebarOpen } from '../countries/countriesActions';
import reducer from '../countries/countriesRedux';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    countries: [],
    openSidebar: false,
    request: { pending: false, error: null, success: false },
  });
});

test('should handle fetching countries', () => {
  const previousState: CountriesState = {
    countries: [],
    openSidebar: false,
    request: { pending: false, error: null, success: false },
  };

  expect(reducer(previousState, setCountries([{ cca2: 'string', flag: 'string', name: 'any' }]))).toEqual({
    countries: [{ cca2: 'string', flag: 'string', name: 'any' }],
    openSidebar: false,
    request: { pending: false, error: null, success: true },
  });
});

test('should handle display change', () => {
  const previousState: CountriesState = {
    countries: [],
    openSidebar: false,
    request: { pending: false, error: null, success: false },
  };
  expect(reducer(previousState, setSidebarOpen(true))).toEqual({
    countries: [],
    openSidebar: true,
    request: { pending: false, error: null, success: false },
  });
});
