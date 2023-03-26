import { createSelector } from '@reduxjs/toolkit';
import { Countries } from 'src/interfaces/countries.interface';
import { CountriesState } from '../actionTypes';

/* selector */
export const selectCountriesReducer = (state: { countries: CountriesState }): CountriesState => state.countries;

export const selectCountriesSlices = createSelector(
  [selectCountriesReducer],
  (countriesSlices: { countries: Countries[] }) => countriesSlices.countries
);

export const countriesLoading = createSelector([selectCountriesReducer], (countriesSlice) => countriesSlice.request.pending);

export const selectCountries = createSelector([selectCountriesSlices], (countries: Countries[]) =>
  countries?.reduce((acc: any, el: Countries) => {
    console.log(el);
    const country = {
      cca2: el.cca2,
      flag: el.flag,
      name: el.name.common,
    };
    acc.push(country);
    return acc;
  }, [])
);
