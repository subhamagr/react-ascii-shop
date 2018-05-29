import keyMirror from 'key-mirror';

export const PRODUCT_LISTING_ACTION_TYPES = keyMirror({
  SET_PRODUCTS: null,
  APPEND_PRODUCTS: null,
  SET_HAS_MORE_PRODUCTS: null,
  SET_DEMANDED_PAGE: null,
  SET_CURRENT_PAGE: null,
  SET_RESULTS_PER_PAGE: null,
  SET_SORT: null,
  SET_LOADING: null,
});
