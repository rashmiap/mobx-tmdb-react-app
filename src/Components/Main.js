import React from 'react';
import Todo from './Todo';
import Header from './Header';
import Navigation from './Navigation';

const Main = (props) => (
  <section className="Main">
    <Header />
    <div className="Main-content">
      <Navigation />
      <Todo />
    </div>
  </section>
)
export default Main;
