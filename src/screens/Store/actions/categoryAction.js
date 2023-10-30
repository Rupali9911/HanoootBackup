import {
  CATEGORY_LIST_LOADING, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_RESET, CATEGORY_PAGE_CHANGE, SUB_CATEGORY_LIST,
  SUB_CATEGORY_LIST_LOADING,
  SUB_CATEGORY_LIST_SUCCESS,
  SUB_CATEGORY_LIST_FAIL,
  SUB_CATEGORY_LIST_RESET,
  SUB_CATEGORY_PAGE_CHANGE
} from "../types";
import { categoryListAPI, subCategoryListAPI } from "../../../services/apis/CategoryAPI";

export const categoryLoadingStart = bool => ({
  type: CATEGORY_LIST_LOADING,
  payload: bool,
});

export const categorySuccess = data => ({
  type: CATEGORY_LIST_SUCCESS,
  payload: data,
});

export const categoryFail = error => ({
  type: CATEGORY_LIST_FAIL,
  payload: error,
});

export const categoryListReset = () => ({
  type: CATEGORY_LIST_RESET,
});

export const categoryPageChange = page => ({
  type: CATEGORY_PAGE_CHANGE,
  payload: page,
});

// export const getSubCategoryList = data => ({
//   type: SUB_CATEGORY_LIST,
//   payload: data,
// });


export const subCategoryLoadingStart = bool => ({
  type: SUB_CATEGORY_LIST_LOADING,
  payload: bool,
});

export const subCategorySuccess = data => ({
  type: SUB_CATEGORY_LIST_SUCCESS,
  payload: data,
});

export const subCategoryFail = error => ({
  type: SUB_CATEGORY_LIST_FAIL,
  payload: error,
});

export const subCategoryListReset = () => ({
  type: SUB_CATEGORY_LIST_RESET,
});

export const subCategoryPageChange = page => ({
  type: SUB_CATEGORY_PAGE_CHANGE,
  payload: page,
});



// export const getCategoryList = () => {
//   return 'hello'

//   // `try {
//   //   const categoryList = await getCategoryListAPI(1, 10)
//   //   console.log('getCategoryList', categoryList);

//   // }
//   // catch (error) {
//   //   console.log('error from getCategoryList : ', error)
//   // }`

// }

export const getCategoryList = (pageNum) => {
  // console.log('sdhjfs')
  // const a = getCategoryListAPI(1, 10)

  // try {
  let limit = 10;
  // return async dispatch => {
  //   await categoryList(pageNum, limit).
  //     then(response => {
  //       if (response?.success) {
  //         if (response?.data?.categories?.rows) {
  //           dispatch(categorySuccess(response?.data?.categories));
  //           if (pageNum === 1) {
  //             dispatch(getSubCategoryList(response?.data?.categories?.rows[0]));
  //           }
  //         }
  //       }
  //     }).
  //     catch(err => {
  //       dispatch(categoryFail(err));
  //     })
  // };


  return async dispatch => {
    await categoryListAPI(pageNum, limit).
      then(async response => {
        // if (response?.success) {
        if (response?.success && response?.data?.categories?.rows) {
          dispatch(categorySuccess(response?.data?.categories));
          if (pageNum === 1) {
            dispatch(subCategoryLoadingStart(true))
            const subCatgResp = await subCategoryListAPI(response?.data?.categories?.rows[0]?.id);
            // dispatch(getSubCategoryList(response?.data?.categories?.rows[0]?.id));
            if (subCatgResp?.success === true) {
              console.log('data from subCatgResp resonse : ', subCatgResp?.data)
              dispatch(subCategorySuccess(subCatgResp?.data));
            }
            else {
              dispatch(subCategoryFail());
            }
          }
        }
        // }
      }).



      //   then(async (response) => {
      //     // console.log('response from product detail api call : ', response)
      //     if (response?.success === true) {
      //         dispatch(productDetailDataSuccess(response?.data));
      //         const filterResp = await ProductFilterAPICall(response?.data?.category_id);
      //         console.log('filterResp : ', filterResp)
      //         if (filterResp?.success === true) {
      //             console.log('data from filter list resonse : ', filterResp?.data)
      //             dispatch(productFilterByCategorySuccess(filterResp?.data));
      //         }
      //     }
      //     else {
      //         dispatch(productDetailDataSuccess(response?.data))
      //     }
      // }).
      catch(err => {
        dispatch(categoryFail(err));
      })
  };


};


export const getSubCategoryList = (id) => {

  return async dispatch => {
    await subCategoryListAPI(id).
      then(async response => {
        // if (response?.success) {
        if (response?.success) {
          dispatch(subCategorySuccess(response?.data));
        }
        // }
      }).
      catch(err => {
        dispatch(subCategoryFail(err));
      })
  };


};