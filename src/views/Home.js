import React, { Component } from 'react';
import Nav from '../components/Nav';
import Shelf from '../components/Shelf';

class Home extends Component {  
  render() {
    const { books, sortBooks } = this.props;
    const shelves = [
      {
        shelfType: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        shelfType: 'wantToRead',
        title: 'Want to Read'
      },
      {
        shelfType: 'read',
        title: 'Read'
      }
    ];
    return(
      <div className="list-books">
        <Nav />
        {shelves.map((shelf, index) => {
          const shelfItems = books.filter(book => book.shelf === shelf.shelfType);
          return (
            <div key={index}>
            <Shelf title={shelf.title} books={shelfItems} sortBooks={sortBooks} />
            </div>
          )
        })}
      </div>
    );
  }
}


export default Home;