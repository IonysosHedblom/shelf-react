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
      console.log(books);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div className="list-books">
        <Nav />
        <div className="list-books-content">
          <Shelf title="Currently Reading" />
          <Shelf title="Want To Read" />
          <Shelf title="Read" />  
        </div>
        <FAB />
      </div>
    );
  }
}


export default Home;