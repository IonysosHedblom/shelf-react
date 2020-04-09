import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  render() {
    const { book, books } = this.props;
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`
              }}>
              </div>
              <ShelfChanger book={book} books={books} sortBooks={this.props.sortBooks} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors[0] : ''}</div>
          </div>
        </li>
    );
  }
}

export default Book;