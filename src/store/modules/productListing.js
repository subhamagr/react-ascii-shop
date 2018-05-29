import { PRODUCT_LISTING_ACTION_TYPES } from '../actionTypes';


const initialState = {
  products: [],
  // currentPage: 0,
  // demandedPage: 1,
  hasMoreProducts: true,
  // sort: null,
  // resultsPerPage: 10,
  loading: false,
};


function productListingReducer(state = initialState, action) {
  switch(action.type) {
    case PRODUCT_LISTING_ACTION_TYPES.SET_PRODUCTS:
      return Object.assign({}, state, { products: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.APPEND_PRODUCTS:
      return Object.assign({}, state, { products: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_HAS_MORE_PRODUCTS:
      return Object.assign({}, state, { hasMoreProducts: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_DEMANDED_PAGE:
      return Object.assign({}, state, { demandedPage: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_RESULTS_PER_PAGE:
      return Object.assign({}, state, { resultsPerPage: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_SORT:
      return Object.assign({}, state, { sort: action.payload });

    case PRODUCT_LISTING_ACTION_TYPES.SET_LOADING:
      return Object.assign({}, state, { loading: action.payload });

    default:
      return state;
  }
}

export default productListingReducer;
