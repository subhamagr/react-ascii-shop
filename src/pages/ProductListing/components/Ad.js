import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { API_BASE_PATH } from '../../../constants';
import { getAdId } from '../../../utils/random';

const styles = theme => ({
  card: {
    minWidth: 275,
    minHeight: 150,
    textAlign: 'center',
    height: '100%',
    padding: 0
  },
  cardContent: {
    height: '50%',
    '& img': {
      height: '100px'
    }
  },
});

class Ad extends React.Component {
  state = {
    id: getAdId()
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={`${API_BASE_PATH}/ads/?r=${this.state.id}`} alt="" />
        </CardContent>
      </Card>
    );
  }
}

Ad.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ad);