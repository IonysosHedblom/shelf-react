import React, { Component } from 'react';
import Shelf from './Shelf';

class Shelves extends Component {
  render() {
    const books = this.props.books;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return(
      <div className="list-books-content">
        <Shelf title="Currently Reading" books={currentlyReading} sortBooks={this.props.sortBooks} />
        <Shelf title="Want To Read" books={wantToRead} sortBooks={this.props.sortBooks} />
        <Shelf title="Read" books={read} sortBooks={this.props.sortBooks} />
      </div>
    )
  }
}

export default Shelves;