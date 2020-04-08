import React, { Component } from 'react';
import Nav from '../components/Nav';

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="about">
          <h2 className="about-header">About this application</h2>
          <div className="about-text">
            <p>Shelf is bookshelf application that lets you organize books you are currently reading, have read and want to read. Then you can put each book on a corresponding shelf. The project emphazises the use of React with a given API server. The main page has three shelves that the user is able to move the books between. You can access your collections anywhere, anytime. Future updates will be implementing the ability to add books to a favorite bookshelf.</p>
          </div>

          <div className="search-terms-text">
            <p>
              The API used for this project had limited book choices. Once you visit the web app youll notice you already have some books stored. The complete list of search terms are listed below:
            </p>
          </div>
          <div className="search-terms">
          'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
          </div>
        </div>
      </div>
    );
  }
}

export default About;
