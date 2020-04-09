import React, { Component } from 'react';
import history from '../history';
import Book from '../components/Book';
import { search } from '../BooksAPI';

class Search extends Component {

  state = {
    query: '',
    results: []
  };



  searchBooks = event => {
    const query = event.target.value;
    this.setState({
      query
    });

    if (query) {
      search(query.trim(), 20).then(books => {
        books.length > 0 ? this.setState({
          results: books
        }) : this.setState({
          results: []
        });
      });
    } else {
      this.setState({
        results: []
      });
    }
  };


  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => history.push('/')}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.searchBooks} />
          </div>
        </div>
        <div className="search-books-results">
          <h2 className="bookshelf-title">Search results</h2>
          <ol className="books-grid">
            {this.state.results.length > 0 && this.state.results.map(book => (
              <Book key={book.id}  sortBooks={this.props.sortBooks} book={book} books={this.props.books} />
            ))} 
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;