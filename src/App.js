import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import About from './views/About';
import history from './history';
import { getAll, update } from './BooksAPI';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {

  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }
  // Fetch all books from api
  getBooks = () => {
    getAll().then(books => {
      this.setState({ books });
    });
  }

  moveBook = (movedBook, shelf) => {
    update(movedBook, shelf).then(response => {
      movedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== movedBook.id)
          .concat(movedBook)
      }));
    });
  };


  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} render={() => (
              <Home books={this.state.books} sortBooks={this.moveBook} />
            )} />
            <Route exact path={"/search"} render={() => (
              <Search books={this.state.books} sortBooks={this.moveBook} />
            )} />
            <Route exact path={"/about"} component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp
