import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MovieTile from './MovieTile';
import CircularProgress from '@material-ui/core/CircularProgress';

@inject('MovieStore')
@observer class MovieList extends Component {
  componentDidMount(){
    this.props.MovieStore.fetchMovies();
  }
  renderTiles(){
    let renderBlock = [];
    renderBlock = this.props.MovieStore.movies !== undefined ?
     this.props.MovieStore.movies.map((key, index) => {
       return (
         <MovieTile key={index} {...this.props} movies={this.props.MovieStore.movies} i={index} movieType={'movies'}/>
       );
     })
     : [];
    return renderBlock;
  }
  render() {
    const { movies, isLoading, isError } = this.props.MovieStore;

    if (isError) {
      return <div className="movie-listing__error">
            <h3> Oops! There was an error loading the movies </h3>
      </div>;
    }
    if (isLoading) {
      return <div className="movie-listing__error">
            <CircularProgress size={150} thickness={2}/>
      </div>;
    }
    
    return (
      <div className="movie-listing">
        <h1>Upcoming movies</h1>
        <div className="movie-listing__blocks">
          {this.renderTiles()}
        </div>
      </div>
    )
  }
}

export default MovieList;
