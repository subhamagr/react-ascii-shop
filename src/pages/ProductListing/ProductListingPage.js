import React from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';

import { handleApplySort, handleLoadMoreProducts, initProductListing } from '../../store/actions/productActions';

import ProductList from './components/ProductList';

import { Page } from '../../components/CommonStyles';
import NoMoreProducts from './components/NoMoreProducts';
import SortComponent from './components/SortComponent';
import Loader from './components/Loader';


class ProductListingPage extends React.Component {
  componentWillMount() {
    this.props.initProductListing();

    window.addEventListener('scroll', debounce(this.onScroll, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.onScroll, 100));
  }

  onScroll = () => {
    const preloadOffset = 4000;
    const scrollHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    const isAtBottom = (scrollPosition + preloadOffset) >= scrollHeight;
    if (isAtBottom && !this.props.loading && this.props.hasMoreProducts) {
      this.props.handleLoadMoreProducts();
    }
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

const mapDispatchToProps = { handleApplySort, handleLoadMoreProducts, initProductListing };


export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);
