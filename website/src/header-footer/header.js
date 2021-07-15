import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <Link class='club-name-link' to="/">D@B</Link>

        <div className='menu-container'>
          <div className='menu'>
            <Link class='menu-link' to="/about">About</Link>
            <Link class='menu-link' to="/events">Events</Link>
            <Link class='menu-link' to="/projects">Projects</Link>
          </div>
        </div>
      </div>
  );
  }
}

export default Header
