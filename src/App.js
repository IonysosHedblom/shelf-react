import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import history from './history';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/search"} component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp
