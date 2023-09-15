import { CATEGORY_LIST_LOADING, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_RESET, CATEGORY_PAGE_CHANGE, SUB_CATEGORY_LIST } from "../types";
import { categoryList } from "../../../services/apis/CategoryAPI";

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

export const getSubCategoryList = data => ({
  type: SUB_CATEGORY_LIST,
  payload: data,
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
  let limit = 20;
  return async dispatch => {
    await categoryList(pageNum, limit).
      then(response => {
        if (response?.success) {
          if (response?.data?.categories?.rows) {
            dispatch(categorySuccess(response?.data?.categories));
            if (pageNum === 1) {
              dispatch(getSubCategoryList(response?.data?.categories?.rows[0]));
            }
          }
        }
      }).
      catch(err => {
        dispatch(categoryFail(err));
      })
  };

  // }
  // catch (error) {
  //   console.log('Error from get category list api', error)
  // }


  // return async dispatch => {
  //   await categoryList(pageNum, limit).
  //     then(result => {
  //       dispatch(categorySuccess(result));
  //     }).
  //     catch(err => {
  //       dispatch(categoryFail(err));
  //     })
  // };

};