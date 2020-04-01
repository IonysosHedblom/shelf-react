import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelf from '../components/Shelf';
import { getAll } from '../BooksAPI';

class Home extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    addBooks: books => {
      const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
      const wantToRead = books.filter(book => book.shelf === 'wantToRead');
      const read = books.filter(book => book.shelf === 'read');
      this.setState({ currentlyReading, wantToRead, read });
    }
  }


  // Fetch books from api
  async componentDidMount() {
    try {
      const books = await getAll();
      this.state.addBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div className="list-books">
        <Nav />
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={this.state.currentlyReading} sortingBooks={this.correctShelf} />
          <Shelf title="Want To Read" books={this.state.wantToRead} />
          <Shelf title="Read" books={this.state.read} />
        </div>
      </div>
    );
  }
}


export default Home;