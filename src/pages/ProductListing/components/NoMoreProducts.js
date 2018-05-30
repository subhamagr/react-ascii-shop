import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  textContainer: {
    textAlign: 'center',
    width: '100%',
  },
};


const NoMoreProducts = ({ classes }) => (
  <Toolbar>
    <div className={classes.textContainer}>~ end of catalogue ~</div>
  </Toolbar>
);


export default withStyles(styles)(NoMoreProducts);