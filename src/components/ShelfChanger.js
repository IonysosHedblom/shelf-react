import React, { Component } from 'react';


class ShelfChanger extends Component {


  handleShelf = event => {
    this.props.sortBooks(this.props.book, event.target.value);
  }


  render() {

    const { book, books } = this.props;

    let currentShelf = 'none';

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={this.handleShelf}>
          <option value="move to">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;