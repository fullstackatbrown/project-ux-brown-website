import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


class DarkHeader extends React.Component {
  render() {
    return (
      <div className='header'>
        <Link class='club-name-link' style={{color: 'white'}} to="/">D@B</Link>

        <div className='menu-container'>
          <div className='menu'>
            <Link class='menu-link' style={{color: 'white'}} to="/about">About</Link>
            <Link class='menu-link' style={{color: 'white'}} to="/events">Events</Link>
            <Link class='menu-link' style={{color: 'white'}} to="/projects">Projects</Link>
          </div>
        </div>
      </div>
  );
  }
}

export default DarkHeader
