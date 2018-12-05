import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todo from './Components/Todo';
import Counter from './Components/Counter';
import NoMatch from './Components/NoMatch';
import Main from './Components/Main';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <section>
        <DevTools/>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/todo" component={Todo} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </section>
    );
  }
}

export default App;
