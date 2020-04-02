import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelves from '../components/Shelves';
import { getAll } from '../BooksAPI';

class Home extends Component {
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
  render() {
    return(
      <div className="list-books">
        <Nav />
        <Shelves books={this.state.books} sortBooks={this.getBooks} />
      </div>
    );
  }
}


export default Home;