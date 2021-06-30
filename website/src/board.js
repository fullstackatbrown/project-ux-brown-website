import React from 'react';
import './App.css';
import './board.css'
import Tile from './tile.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.options = this.props.options
    this.state = {
      displayed_options: [],
      open: false
    };

    this.renderOptions = this.renderOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  renderOptions(option) {
    return (
      <Option
        color={option.color}
        content={option.content}
      />
    );
  }

// come back to this, unfinished-- need to close dropdown after initial open when user clicks outside of it

// i think the problem is that this re-renders the page each time, so the dropdown goes back to blank as soon as it loads(?)

// this.setState({displayed_options: this.options})
  handleClick() {

  }

  // display this.options[0] (all categories), others are hidden until onClick, then display them all
  // next step is to figure out how to filter based on which option is clicked


// <p onClick={this.handleClick}>{display}</p>

  render() {

    const display = this.options.map(option => this.renderOptions(option));

      return (
        <div>
          <button className='dropdown' onClick={this.handleClick}></button>
          <div>{display}</div>
        </div>
      );
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.circle = <FontAwesomeIcon className='circles' style={{color: this.props.color}} icon={faCircle}/>;
    this.content = this.props.content;
    this.clicked = false;

    this.handleClick = this.handleClick.bind(this);
  }

  // <p class='circles'>{this.circle}</p>
  // <p class='content'>{this.content}</p>
  // </button>

  handleClick() {
    this.clicked = !this.clicked;
  }

  render() {
    return (
      <button className='option' onClick={this.handleClick}>{this.circle}{this.content}</button>
  );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.total_categories = ['all-categories', 'category-0', 'category-1', 'category-2', 'category-3'];
    this.total_board = [
      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
            {
              cssName: 'category-1',
              displayName: 'Project Tag'
            },
            {
              cssName: 'category-2',
              displayName: 'Project Tag'
            }
          ]
      },

      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
          {
            cssName: 'category-1',
            displayName: 'Project Tag'
          }
        ]

      },

      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
            {
              cssName: 'category-0',
              displayName: 'Project Tag'
            }
          ]
      },

      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
            {
              cssName: 'category-1',
              displayName: 'Project Tag'
            },
            {
              cssName: 'category-2',
              displayName: 'Project Tag'
            }
          ]

      },

      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
          {
            cssName: 'category-1',
            displayName: 'Project Tag'
          }
        ]

      },

      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        status: 'Ongoing',
        categories: [
            {
              cssName: 'category-0',
              displayName: 'Project Tag'
            }
          ]
      }
    ]
    this.state = {
      filtered_board: this.total_board
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterBoard = this.filterBoard.bind(this);
  }

  filterBoard(cat) {
    let filtered = [];
    if (cat !== 'all-categories') {
      filtered = this.total_board.filter(tile =>
        (tile.categories.filter(category =>
          category.cssName.includes(cat))).length > 0)
    } else {
      filtered = this.total_board;
    }

    return filtered;
  }

  handleChange(event) {
    const choice = event.target.value;
    const filtered = this.filterBoard(choice);
    this.setState({filtered_board: filtered})
  }

  renderTile(tile) {
    return (
      <Tile
        title={tile.title}
        description={tile.description}
        status={tile.status}
        categories={tile.categories}
      />
    );
  }

  render() {
    const tiles = this.state.filtered_board.map(tile => this.renderTile(tile));
    const dropdown_options = [
      {
        color: 'transparent',
        content: 'all categories'
      },
      {
        color: '#ADDCD1',
        content: 'project category 0'
      },
      {
        color: '#FFCC01',
        content: 'project category 1'
      },
      {
        color: '#FF8260',
        content: 'project category 2'
      },
      {
        color: '#2D56C2',
        content: 'project category 3'
      }
    ];

      return (
        <div class='board'>
        <div class='filter-container'>
        <form>
          <div class='filter-label'>
            <label for="filter">Filter</label>
            <p><em>(click option)</em></p>
          </div>
          <Dropdown options={dropdown_options}/>
        </form>

        </div>
        <div class='board-row'>
          {tiles}
        </div>
        <div class='board-row'>

        </div>
        </div>
      );
    }
  }

export default Board
