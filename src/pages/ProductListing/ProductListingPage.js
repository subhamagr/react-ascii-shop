import React from 'react';
import { connect } from 'react-redux';

import { initProductListing } from '../../store/actions/productActions';

import ProductList from './ProductList';

import { Page } from '../../components/CommonStyles';


class ProductListingPage extends React.Component {
  componentWillMount() {
    this.props.initProductListing();
  }

  render() {
    return (
      <Page>
        <ProductList products={this.props.products} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({ ...state.productListing });

const mapDispatchToProps = { initProductListing };


export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);
