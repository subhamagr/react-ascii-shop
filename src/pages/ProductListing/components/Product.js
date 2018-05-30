import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { centsToDollar } from '../../../utils/price';
import { humanize } from '../../../utils/datetime';

const styles = theme => ({
  card: {
    minWidth: 275,
    minHeight: 150,
    textAlign: 'center',
    height: '100%'
  },
  cardContent: {
    height: '30%',
  },
  pos: {
    marginBottom: 12,
  },
});

const Product = ({ product, classes }) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
      <Typography variant="headline" component="h2" style={{ fontSize: product.size }}>
        {product.face}
      </Typography>
    </CardContent>
    <div>
      <Typography className={classes.pos} color="textSecondary">
        {humanize(product.date)}
      </Typography>
    </div>
    <div>
      <Typography className={classes.pos} color="textSecondary">
        ${centsToDollar(product.price, 2)}
      </Typography>
    </div>
  </Card>
);

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);