import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Counter';
import Todo from './Todo';
import NoMatch from './NoMatch';

const Main = (props) => {
  return <main className="Movie-content">
    <Switch>
      <Route exact path='/' render={() => <Todo/>} />
      <Route path='/movies' render={() => <Counter {...props} />} />
      <Route path='/shows' render={() => <Todo {...props}/>} />
      <Route component={NoMatch} />
    </Switch>
  </main>
}

export default Main;
