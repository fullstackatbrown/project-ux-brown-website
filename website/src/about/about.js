import React from 'react';
import '../App.css';
import Header from '../header-footer/header.js';
import Footer from '../header-footer/footer.js';


function About() {
  return (
    <div className="canvas">
      <Header />
      <div className="container">
        <h1>About Us</h1>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="list-inline">
          <div className="list-item">
            <img src="https://via.placeholder.com/550x250"></img>
          </div>
          <div className="list-item">
            <img src="https://via.placeholder.com/550x250"></img>
          </div>
        </div>
        <h1>Our Mission</h1>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1>What is UX and Product Design anyway?</h1>
        <div className="list-inline">
          <div clasName="list-item">
            <img src="https://via.placeholder.com/550x250"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About
