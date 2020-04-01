import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelves from '../components/Shelves';
import { getAll } from '../BooksAPI';

class Home extends Component {
  state = {
    books: []
  };

  // Fetch all books from api
  async componentDidMount() {
    try {
      await getAll().then(books => {
        this.setState({ books });
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return(
      <div className="list-books">
        <Nav />
        <Shelves books={this.state.books} />
      </div>
    );
  }
}


export default Home;