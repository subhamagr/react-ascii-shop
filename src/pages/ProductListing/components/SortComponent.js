import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { withStyles } from '@material-ui/core/styles';

import { SORT_OPTIONS } from '../../../constants';
const styles = {
  sortContainer: {
    textAlign: 'right',
    width: '100%',
  },
};


class SortComponent extends React.Component {
  state = {
    anchorEl: null,
  };

  toggleMenu = event => {
    this.setState({ anchorEl: event ? event.currentTarget : null });
  };

  handleSelect = (option) => {
    this.props.onApply(option);
    this.toggleMenu();
  }

  render() {
    const {
      classes,
      disabled,
      selectedOption,
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <Toolbar>
        <div className={classes.sortContainer}>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={disabled ? null : this.toggleMenu}
          >
            <SortIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => this.toggleMenu()}
          >
            {SORT_OPTIONS.map(option => (
              <MenuItem key={option} selected={option === selectedOption} onClick={() => this.handleSelect(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    );
  }
}


export default withStyles(styles)(SortComponent);