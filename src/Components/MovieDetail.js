import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardDetails } from '../Styles/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { detailsStyles } from '../Styles/styles';
import voteAvg from '../Assets/vote-count.svg';
import releaseDate from '../Assets/release-date.svg';
import voteCount from '../Assets/vote-avg.svg';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class MovieDetail extends Component {

  render(){

    return(
      <div className="details">
        sosdod
      </div>
    )
  }
}
MovieDetail.propTypes = {
  movieType: PropTypes.bool,
};
