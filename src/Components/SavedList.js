import React, { Component } from 'react';
import MovieTile from './MovieTile';
import { inject, observer } from 'mobx-react';

@inject('MovieStore')
export default class SavedList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
  __renderMovies(){
   let renderBlock = [];
   renderBlock = this.props.MovieStore.movies !== undefined ?
    this.props.MovieStore.movies
    .map((item, key) => {
      if (item.saved === true) {
        return(
          <MovieTile key={key} {...this.props} movies={this.props.MovieStore.movies} i={key} movieType={'movies'}/>
        )
      }
      return [];
    })
    : <p className="no-saved">Looks like there no saved movies</p>;
   return renderBlock.length > 0 ? renderBlock : <p className="no-saved">Looks like there no saved movies</p>;
  }

  render(){
    return(
      <div className="movie-listing">
        <h3>Saved Upcoming Movies</h3>
        <div className="movie-listing__blocks">
            {this.__renderMovies()}
        </div>
      </div>
    )
  }
}
