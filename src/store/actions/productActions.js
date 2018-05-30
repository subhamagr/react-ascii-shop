import ProductAPI from '../api/products';
import { PRODUCT_LISTING_ACTION_TYPES } from '../actionTypes';

import * as constants from '../../constants';


/* ACTIONS */


export function appendProducts(payload = []) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.APPEND_PRODUCTS, payload };
}

export function setHasMoreProducts(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_HAS_MORE_PRODUCTS, payload };
}

export function setProducts(payload = []) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_PRODUCTS, payload };
}

function setCurrentPage(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_CURRENT_PAGE, payload };
}

function setDemandedPage(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_DEMANDED_PAGE, payload };
}

export function setProductsPerPage(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_RESULTS_PER_PAGE, payload };
}

export function setSort(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_SORT, payload };
}

export function setLoading(payload) {
  return { type: PRODUCT_LISTING_ACTION_TYPES.SET_LOADING, payload };
}


/* DISPATCHERS */

export function resetProductListing() {
  return (dispatch) => {
    dispatch(setCurrentPage(constants.DEFAULT_CURRENT_PAGE));
    dispatch(setDemandedPage(constants.DEFAULT_DEMANDED_PAGE));
    dispatch(setProducts([]));
  };
}

function handleFetchProducts() {
  return (dispatch, getState) => {
    const { demandedPage, resultsPerPage, sort } = getState().productListing;

    dispatch(setLoading(true));
    ProductAPI.getProducts(demandedPage, resultsPerPage, sort)
      .then(res => res.data)
      .then((products = []) => {
        dispatch(setHasMoreProducts(products.length === resultsPerPage));
        dispatch(setCurrentPage(demandedPage));
        dispatch(appendProducts(products));
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setLoading(false));
      });
  }
}


export function initProductListing(sortApplied = false) {
  return (dispatch) => {
    if (!sortApplied) {
      dispatch(setSort(constants.DEFAULT_SORT));
    }
    dispatch(setProducts([]));
    dispatch(setCurrentPage(constants.DEFAULT_CURRENT_PAGE));
    dispatch(setDemandedPage(constants.DEFAULT_DEMANDED_PAGE));
    dispatch(setProductsPerPage(constants.DEFAULT_RESULTS_PER_PAGE));
    dispatch(handleFetchProducts());
  };
}

export function handleApplySort(sort) {
  return (dispatch) => {
    dispatch(setSort(sort));
    dispatch(initProductListing(true));
  }
}

export function handleLoadMoreProducts() {
  return (dispatch, getState) => {
    const { currentPage } = getState().productListing;
    dispatch(setDemandedPage(currentPage + 1));
    dispatch(handleFetchProducts());
  };
}
