import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { centsToDollar } from '../../../utils/price';
import { humanize } from '../../../utils/datetime';

const styles = theme => ({
  root: {
    marginBottom: '3%'
  },
  card: {
    minWidth: 275,
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

function ProductList(props) {
  const { classes, products } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {products.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="headline" component="h2" style={{ fontSize: p.size }}>
                  {p.face}
                </Typography>
              </CardContent>
              <div>
                <Typography className={classes.pos} color="textSecondary">
                  {humanize(p.date)}
                </Typography>
              </div>
              <div>
                <Typography className={classes.pos} color="textSecondary">
                  ${centsToDollar(p.price, 2)}
                </Typography>
              </div>
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