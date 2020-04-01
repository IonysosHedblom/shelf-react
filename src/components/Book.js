import React, { Component } from 'react';

class Book extends Component {
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
              <select value={this.props.shelf} onChange={e => console.log(e)}>
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