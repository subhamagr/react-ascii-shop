import React from 'react';
import { connect } from 'react-redux';

import { handleApplySort, initProductListing } from '../../store/actions/productActions';

import ProductList from './components/ProductList';

import { Page } from '../../components/CommonStyles';
import NoMoreProducts from './components/NoMoreProducts';
import SortComponent from './components/SortComponent';
import Loader from './components/Loader';


class ProductListingPage extends React.Component {
  componentWillMount() {
    this.props.initProductListing();
  }

  render() {
    const {
      hasMoreProducts,
      loading,
      products,
      sort,
    } = this.props;
    return (
      <Page>
        <SortComponent selectedOption={sort} onApply={this.props.handleApplySort} disabled={!products.length} />
        <ProductList products={products} />
        {loading || (!hasMoreProducts && <NoMoreProducts />)}
        {loading && <Loader />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({ ...state.productListing });

const mapDispatchToProps = { handleApplySort, initProductListing };


export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);
