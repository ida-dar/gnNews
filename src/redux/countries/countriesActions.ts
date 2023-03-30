import { Countries } from 'src/interfaces/countries.interface';
import { COUNTRIES_ACTION_TYPES } from '../actionTypes';
import { createAction } from '../utils/createAction';

// actions
export const setCountries = (Countries: Countries[]) => createAction(COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES, Countries);

export const fetchCountriesStart = () => createAction(COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_START);

export const fetchCountriesFail = (e: any) => createAction(COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_FAIL, e);

export const setSidebarOpen = (val: boolean) => createAction(COUNTRIES_ACTION_TYPES.OPEN_SIDEBAR, val);
