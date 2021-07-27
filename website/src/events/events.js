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
    var date_2 = new Date(Date.UTC(2021, 6, 20, 2, 5)); // 10:05pm EST, July 19th
    console.log(date_1);
    console.log(date_2);

    // this.total_board = data.events
    this.total_board = [
      {
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        date: date_2,
        date_words: 'Mon, July 19th, 10:05pm EST',
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

        <div class='section'>
          <div>Upcoming events</div>
          <div style={{ display: "flex", alignItems: "flex-end", marginLeft: "20px" }}>
            <svg width="700" height="50" viewBox="0 0 1200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M221.014 14.1651C286.006 9.47165 347.015 7.81175 405.892 7.47888C284.52 2.14413 162.269 3.83731 41.4428 12.5251C107.727 14.8952 162.563 14.9817 221.014 14.1651ZM30.6909 38.3689C30.1258 37.1839 31.3411 35.9656 33.4002 35.6394C78.6839 28.5205 121.858 23.1259 163.314 19.0693C114.295 19.056 64.0267 18.1928 3.56321 15.4277C1.59705 15.3368 0.0682396 14.4158 0.00244271 13.2885C-0.0672246 12.159 1.36095 11.1826 3.30777 11.0184C150.774 -1.36873 300.702 -3.31933 448.931 5.20651C450.959 5.32412 452.46 6.31606 452.418 7.46335C482.421 7.59427 511.987 7.96265 541.352 8.32658C562.93 8.59509 585.242 8.87248 607.184 9.04558C609.312 9.06111 611.015 10.0597 611 11.278C610.984 12.4985 609.258 13.4838 607.129 13.4838C477.591 13.4838 384.852 15.4056 310.335 16.9478C278.819 17.6025 249.825 18.2039 221.676 18.5966C163.248 22.8263 101.604 29.5169 35.4476 39.9223C35.1031 39.9734 34.7587 40 34.4219 40C32.7228 40 31.1631 39.3542 30.6909 38.3689Z" fill="#FFF2E6" />
            </svg>
          </div>
        </div>

        <div class='board'>
          <div class='board-row'>
            {this.total_board.filter(tile => tile.date.getTime() > currentTime.getTime()).map(tile => this.renderTile(tile))}
          </div>
          <div class='board-row'>
          </div>

        </div>
        <div class='section2'>
          <div>Past events</div>
          <svg width="211" height="100" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FE7B33" />
          </svg>
        </div>
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
