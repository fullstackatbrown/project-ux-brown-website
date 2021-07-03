import React from 'react';
import './App.css';
import './board.css'

import Tile from './tile.js'
import Option from './option.js'
import Dropdown from './dropdown.js'

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
      filtered_board: this.total_board,
      dropdown: []
    };
    this.filterBoard = this.filterBoard.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

// let choice = event.target.value;
// let filtered = this.filterBoard(choice);
// this.setState({filtered_board: filtered});
  handleChange(event) {
    let options = [
        <Option color='transparent' content='all categories'/>,
        <Option color='#ADDCD1' content='project category 0'/>,
        <Option color='#FFCC01' content='project category 1'/>,
        <Option color='#FF8260' content='project category 2'/>,
        <Option color='#2D56C2' content='project category 3'/>
    ];
    this.setState({dropdown: options})
  }
// <Dropdown onChange={this.handleChange}/>
  render() {
    const tiles = this.state.filtered_board.map(tile => this.renderTile(tile));

      return (
        <div class='board'>
        <div class='filter-container'>
        <form>
          <div class='filter'>
            <p class="filter-label">Filter</label>
            <p><em>(click option)</em></p>
          </div>

        <button className='dropdown' onClick={this.handleChange}></button>
        <div>{this.state.dropdown}</div>
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
