import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelf from '../components/Shelf';
import { getAll } from '../BooksAPI';

class Home extends Component {
  state = {
    books: []
  };

  // Fetch all books from api
  async componentDidMount() {
    try {
      await getAll().then(books => {
        this.setState({ books });
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');
    return(
      <div className="list-books">
        <Nav />
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={currentlyReading} />
          <Shelf title="Want To Read" books={wantToRead} />
          <Shelf title="Read" books={read} />
        </div>
      </div>
    );
  }
}


export default Home;