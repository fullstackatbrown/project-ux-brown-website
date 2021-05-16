import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './header.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <a class='club-name-link' href='#'>UXBR</a>

        <div className='menu-container'>
          <div className='menu'>
            <a class='menu-link' href='#'>About</a>
            <a class='menu-link' href='#'>Events</a>
            <a class='menu-link' href='#'>Projects</a>
          </div>
        </div>
      </div>
  );
  }
}

export default Header
