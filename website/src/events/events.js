import React from 'react';
import '../App.css';
import './events.css'
import EventTile from './event_tile.js'
import DarkHeader from '../header-footer/dark_header.js';
import data from './events-data.json';
//import DateObject from "react-date-object";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.total_categories = ['all-categories', 'category-0', 'category-1', 'category-2', 'category-3'];
    // want these dates to be in UTC
    // time needs to be in UTC (universal coordinated time) year, month (0 indexed), date, hour, minute
    var date_1 = new Date(Date.UTC(2021, 4, 7, 21, 0));
    var date_2 = new Date(Date.UTC(2021, 11, 11, 1, 0)); // future date
    console.log(date_1);
    console.log(date_2);

    // this.total_board = data.events
    this.total_board = [
      {
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_2,
        date_words: 'Mon, December 11, 1:00 pm EST',
        status: true,
        add_link: "https://www.fullstackatbrown.com/",

      },

      {
        title: 'Event 2',
        description: 'Test',
        date: date_1,
        date_words: 'Fri, May 7, 5:00 pm EST',
        status: true,
        add_link: "https://www.fullstackatbrown.com/",


      },

      {
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_1,
        date_words: 'Fri, May 7, 5:00 pm EST',
        status: true,
        add_link: "https://www.fullstackatbrown.com/",

      },

      {
        title: 'Event 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_1,
        date_words: 'Fri, May 7, 5:00 pm EST',
        status: true,
        add_link: "https://www.fullstackatbrown.com/",


      },

      {
        title: 'Event 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_1,
        date_words: 'Fri, May 7, 5:00 pm EST',
        status: false,
        add_link: "https://www.fullstackatbrown.com/",

      },

      {
        title: 'Event 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_1,
        date_words: 'Fri, May 7, 5:00 pm EST',
        status: false,
        add_link: "https://www.fullstackatbrown.com/",
      }
    ]

  }



  renderTile(tile) {
    return (
      <EventTile
        title={tile.title}
        description={tile.description}
        date={tile.date}
        date_words={tile.date_words}
        status={tile.status}
        add_link={tile.add_link}
      />
    );
  }

  render() {
    var currentTime = new Date();
    console.log(currentTime.getTime()); // this is the current time in UTC

    return (
      <div class='all'>
        <DarkHeader />

        <div class='section'> Upcoming events </div>
        <div class='board'>
          <div class='board-row'>
            {this.total_board.filter(tile => tile.date.getTime() > currentTime.getTime()).map(tile => this.renderTile(tile))}
          </div>
          <div class='board-row'>
          </div>

        </div>
        <div class='section'> Past events </div>
        <div class='board'>
          <div class='board-row'>

            {this.total_board.filter(tile => tile.date.getTime() < currentTime.getTime()).map(tile => this.renderTile(tile))}

          </div>
          <div class='board-row'>
          </div>
        </div>
      </div>
    );
  }
}


export default Events
