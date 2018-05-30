import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Product from './Product';
import Ad from './Ad';

const styles = theme => ({
  root: {
    marginBottom: '3%'
  },
});

function ProductList(props) {
  const { classes, products } = props;

  const productGrids = [];
  products.forEach((product, i) => {
    productGrids.push(
      <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Product product={product} />
      </Grid>
    );
    if ((i + 1) % 20 === 0) {
      productGrids.push(
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Ad index={i}/>
        </Grid>
      );
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {productGrids}
      </Grid>
    </div>
  );
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);