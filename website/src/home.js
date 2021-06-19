import Header from './header.js';
import Footer from './footer.js';
import './App.css';
import { Button } from '@material-ui/core';
import React from 'react';
import Profile from './profile.js';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import data from './data.json';
import EventTile from './event_tile.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.members = data.profiles;
    this.events = data.events;
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

  renderEventTile(tile) {
    return (
      <div className="event-item">
        <EventTile
          title={tile.title}
          description={tile.description}
          date={tile.date}
          date_words={tile.date_words}
          status={tile.status}
          add_link={tile.add_link}
        />
      </div>
    );
  }

  render() {
    //TODO: al change routes and arrive on top
    //TODO: al add svg graphics by Coordinates & CSS
    //TODO: al figure out graphics for landing page (gradiant color on orange bg)
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
                <SocialIcon className="social" url="" network="facebook" />
                <SocialIcon className="social" url="" network="linkedin" />
                <SocialIcon className="social" url="" network="instagram" />
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
        <div className="panel-event">
          <div className="about-content">
            <div className="row">
              <div className="subtitle-bright">
                <b>Events</b>
              </div>
              <Button variant="contained" color="secondary">
                <Link to="/events">Explore All</Link>
              </Button>
            </div>
          </div>
          <div className="events">
            {this.events.map(tile => this.renderEventTile(tile)).slice(0, 3)}
          </div>
        </div>
        <div className="panel-projects">
          <div className="project-content">
            <div className="left-col">
              <div className="subtitle-bright"><b>Projects</b></div>
              <p className="content-bright">
                Need a design for your newest side hustle, or want to get involved as a designer? Make something awesome with us!
              </p>
              <br />
              <Button variant="contained" color="secondary">
                <Link to="/projects">View Our Projects</Link>
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
