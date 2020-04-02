import React, { Component } from 'react';
import { update } from '../BooksAPI';


class Shelf extends Component {
  
  moveBook = (event, book) => {
    const shelf = event.currentTarget.value;
    update(book, shelf).then(result => {
      this.props.sortBooks();
    })
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={event => this.moveBook(event, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors[0]}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;