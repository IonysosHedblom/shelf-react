import React, { Component } from 'react';
import { update } from '../BooksAPI';

class Book extends Component {
  handleChange = async event => {
    try {
      const newShelf = event.target.value;
      const book = this.props;
      const result = await update(book, newShelf);
      this.props.moveBook(book, newShelf, result);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              backgroundImage: `url(${this.props.imageLinks.thumbnail})`
            }}>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors[0]}</div>
        </div>
      </li>
    );
  }
}

export default Book;