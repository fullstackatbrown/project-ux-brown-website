import React from 'react';
import './App.css';
import './board.css'
import Tile from './tile.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

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
    this.setState({filtered_board: filtered, selected_category: choice})
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

      return (
        <div class='board'>
        <div class='filter-container'>
        <form>
          <div class='filter-label'>
            <label for="filter">Filter</label>
            <p><em>(click option)</em></p>
          </div>
          <div class='circles'>
          <FontAwesomeIcon class='aquamarine-circle' icon={faCircle}/>
          <FontAwesomeIcon class='yellow-circle' icon={faCircle}/>
          <FontAwesomeIcon class='coral-circle' icon={faCircle}/>
          <FontAwesomeIcon class='blue-circle' icon={faCircle}/>
          </div>
          <select name="filter" id="filter" onChange={this.handleChange} size='5'>
            <option value="all-categories" selected>all projects</option>
            <option value="category-0">project category 0</option>
            <option value="category-1">project category 1</option>
            <option value="category-2">project category 2</option>
            <option value="category-3">project category 3</option>
          </select>
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
