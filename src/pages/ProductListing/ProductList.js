import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { centsToDollar } from '../../utils/price';

const styles = theme => ({
  card: {
    minWidth: 275,
    textAlign: 'center',
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buyNow: {
    width: '100%'
  }
});

function ProductList(props) {
  const { classes, products } = props;

  return (
    <div>
      <Grid container spacing={24}>
        {products.map(p => (
          <Grid item xs={6} sm={4} key={p.id}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2" style={{ fontSize: p.size }}>
                  {p.face}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {p.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" className={classes.buyNow}>Buy for ${centsToDollar(p.price, 2)}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);