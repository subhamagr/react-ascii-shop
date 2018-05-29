import API from './config';

class ProductAPI {
  static getProducts(_page = 1, _limit = 10, _sort = null) {
    const params = { _page, _limit };
    if (_sort) {
      params._sort = _sort;
    }
    return API.get('/products', { params })
  }
}

export default ProductAPI;
