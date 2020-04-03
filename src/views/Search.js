import React, { Component } from 'react';
import history from '../history';
import { search } from '../BooksAPI';

class Search extends Component {

  state = {
    query: '',
    books: []
  }



  handleInputChange = async event => {
    try {
      const query = event.target.value;
      this.setState({
        query
      })
      if (query.trim()) {
        const searchResults = await search(query);
        if (searchResults.err) {
          this.setState({
            books: []
          })
        } else {
          this.setState({
            books: searchResults
          })
        }
      }
    } catch (err) {
      console.log(err);      
    }
  }




  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => history.push('/')}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange} value={this.state.query} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;