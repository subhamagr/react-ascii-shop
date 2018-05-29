import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles, { Brand } from './HeaderStyles';


const Header = ({ classes, open, handleToggle, }) => (
  <AppBar
    position="absolute"
    className={classes.appBar}
  >
    <Toolbar>
      <Brand>
        <Typography variant="title" color="inherit" noWrap>
          React Ascii Shop
        </Typography>
      </Brand>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);

