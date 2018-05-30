import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  textContainer: {
    textAlign: 'center',
    width: '100%',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});


const Loader = ({ classes }) => (
  <Toolbar>
    <div className={classes.textContainer}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  </Toolbar>
);


export default withStyles(styles)(Loader);