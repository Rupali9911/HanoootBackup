import { CATEGORY_LOAD_START, CATEGORY_LOAD_SUCCESS, CATEGORY_LOAD_FAIL } from "../types";


export const categoryLoadingStart = bool => ({
    type: CATEGORY_LOAD_START,
    payload: bool,
  });
  
  export const categorySuccess = data => ({
    type: CATEGORY_LOAD_SUCCESS,
    payload: data,
  });
  
  export const categoryFail = error => ({
    type: CATEGORY_LOAD_FAIL,
    payload: error,
  });