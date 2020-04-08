import React, { Component } from 'react';
import history from '../history';
import Book from '../components/Book';
import { search } from '../BooksAPI';

class Search extends Component {

  state = {
    results: []
  };



  handleInputChange = async event => {
    const query = event.target.value.trim();
    if (query) {
      await search(query, 20).then(results => {
        this.setState({
          results
        });
      });
    } else {
      this.setState({
        results: []
      })
    }
  };


  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => history.push('/')}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="search-books-results">
          <h2 className="bookshelf-title">Book results</h2>
          <ol className="books-grid">
            {this.state.results.length > 0 && this.state.results.map((book, index) => <Book key={index} {...book} title={book.title} authors={book.authors} shelf='none' sortBooks={this.props.sortBooks} />)} 
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;