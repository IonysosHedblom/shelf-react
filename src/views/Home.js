import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelf from '../components/Shelf';
import FAB from '../components/FAB';
import { getAll } from '../BooksAPI';

class Home extends Component {

  // Fetch books from api
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div className="list-books">
        <Nav />
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={this.props.currentlyReading} />
          <Shelf title="Want To Read" books={this.props.wantToRead} />
          <Shelf title="Read" books={this.props.read} />  
        </div>
        <FAB />
      </div>
    );
  }
}


export default Home;