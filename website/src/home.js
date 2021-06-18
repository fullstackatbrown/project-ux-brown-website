import Header from './header.js';
import Footer from './footer.js';
import './App.css';
import { Button } from '@material-ui/core';
import React from 'react';
import Profile from './profile.js';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.members = [
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },

      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      },
      {
        image: 'https://via.placeholder.com/80',
        name: 'first, lastname',
        role: 'UX Designer',
        class: '\'23'

      }
    ]

  }

  renderProfile(user) {
    return (
      <div className="profile-item">
        <Profile
          image={user.image}
          name={user.name}
          role={user.role}
          class={user.class}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="panel-landing">
          <Header />
          <div className="panel-title">
            <b>We grow, educate, and connect the User Experience and Product Design community at Brown and RISD</b>
          </div>
          <div className="btn">
            <Button variant="contained" href="#about" color="white">Find Out More</Button>
          </div>
        </div>
        <div className="panel-about" id="about">
          <div className="about-content">
            <div className="col">
              <div className="subtitle"><b>About Us</b></div>
              <p className="content">
                Design @ Brown-RISD aims to empower designers to contribute positively to their local and global communities through events, workshops, projects, and mentorship opportunities.
              </p>
              <div className="subtitle"><b>Join Our Team</b></div>
              <p className="content">
                Interested in joining our team or want to learn more about our organization? Contact us at the links below.
              </p>
              <div className="subtitle"><b>Connect</b></div>
              <p className="content">
                For general inquiries, email us at uxbrownrisd@brown.edu.
              </p>
              <div className="social">
                <SocialIcon className="social" url="" network="facebook"/>
                <SocialIcon className="social" url="" network="linkedin"/>
                <SocialIcon className="social" url="" network="instagram"/>
              </div>
            </div>
            <div className="col">
              <div className="subtitle"><b>Our Team</b></div>
              <p className="content-gray">
                EXECUTIVE BOARD
              </p>
              <div class='members'>
                {this.members.map(user => this.renderProfile(user))}
              </div>
              <br />
              <Button variant='contained' color="secondary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Home;
