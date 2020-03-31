import React from 'react';
import history from './../history';

const Nav = (props) => {
  return (
    <div className="list-books-title">
      <nav>
        <h1 className="logo">Shelf</h1>
        <ul className="nav-links">
          <li><button>Home</button></li>
          <li><button onClick={() => history.push('/search')}>Search</button></li>
          <li><button>About</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;