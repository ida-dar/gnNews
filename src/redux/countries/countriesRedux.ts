import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Countries } from 'src/interfaces/countries.interface';
import { CountriesState, COUNTRIES_ACTION_TYPES } from '../actionTypes';
import { fetchCountriesFail, fetchCountriesStart, setCountries } from './countriesActions';

// state
const initialState: CountriesState = {
  countries: [] as Countries[],
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: false as boolean,
  },
};

// reducer
export const fetchCountries = () => async (dispatch: Dispatch) => {
  dispatch(fetchCountriesStart());

  try {
    // list of countries available in News API
    const resp = await axios.get(
      'https://restcountries.com/v3.1/alpha?codes=ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ae,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za'
    );
    dispatch(setCountries(resp.data));
  } catch (e) {
    dispatch(fetchCountriesFail(e));
  }
};

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_START:
      return {
        ...state,
        countries: action.payload,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case COUNTRIES_ACTION_TYPES.FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        countries: action.payload,
        request: {
          pending: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
