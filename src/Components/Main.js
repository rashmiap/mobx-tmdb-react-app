import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Counter';
import Todo from './Todo';
import NoMatch from './NoMatch';
import MovieList from './MovieList';

const Main = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={() => <MovieList />} />
      <Route path='/movies' render={() => <Counter {...props} />} />
      <Route path='/shows' render={() => <Todo {...props}/>} />
      <Route component={NoMatch} />
    </Switch>
  </main>
}

export default Main;
