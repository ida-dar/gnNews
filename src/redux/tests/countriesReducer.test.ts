import { CountriesState } from '../actionTypes';
import { setCountries } from '../countries/countriesActions';
import reducer from '../countries/countriesRedux';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    countries: [],
    request: { pending: false, error: null, success: false },
  });
});

test('should handle fetching countries', () => {
  const previousState: CountriesState = {
    countries: [],
    request: { pending: false, error: null, success: false },
  };

  expect(reducer(previousState, setCountries([{ cca2: 'string', flag: 'string', name: 'any' }]))).toEqual({
    countries: [{ cca2: 'string', flag: 'string', name: 'any' }],
    request: { pending: false, error: null, success: true },
  });
});
