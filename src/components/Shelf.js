import React, { Component } from 'react';
import Book from './Book';


class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books && this.props.books.map(book => <Book key={book.id} book={book} books={this.props.books} sortBooks={this.props.sortBooks} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;