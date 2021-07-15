import React from 'react';
import '../App.css';
import './projects_board.css'

import Tile from './projects_tile.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { BiMenu } from 'react-icons/bi';

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
              key: 'category-2',
              displayName: 'Project Tag'
            },
            {
              key: 'category-3',
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
            key: 'category-2',
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
              key: 'category-1',
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
              key: 'category-2',
              displayName: 'Project Tag'
            },
            {
              key: 'category-3',
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
            key: 'category-2',
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
              key: 'category-1',
              displayName: 'Project Tag'
            }
          ]
      }
    ]
    this.dropdown_options = [
        { value: "all categories", key: 'all-categories', circle_color: 'transparent'},
        { value: "project category", key: 'category-1', circle_color: '#ADDCD1'},
        { value: "project category", key: 'category-2', circle_color: '#FFCC01'},
        { value: "project category", key: 'category-3', circle_color: '#FF8260'},
        { value: "project category", key: 'category-4', circle_color: '#2D56C2'}
      ]
    this.state = {
      filtered_board: this.total_board,
      showItems: false,
      selectedItem: this.dropdown_options && this.dropdown_options[0]
    };
    this.filterBoard = this.filterBoard.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  filterBoard(cat) {
    let filtered = [];
    if (cat !== 'all-categories') {
      filtered = this.total_board.filter(tile =>
        (tile.categories.filter(category =>
          category.key.includes(cat))).length > 0)
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

  dropDown() {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem(item) {
    this.setState({
      selectedItem: item,
      showItems: false,
      filtered_board: this.filterBoard(item.key)
    });
  };

  render() {
    const tiles = this.state.filtered_board.map(tile => this.renderTile(tile));

    // <div className="dropdown-hamburger" onClick={this.dropDown}></div>

      return (
        <div class='board'>
          <div class='filter-container'>
          <div class='labels-container'>
            <p class="filter-label">Filter</p>
            <BiMenu className="dropdown-hamburger" onClick={this.dropDown}/>
          </div>
              <div className="dropdown-container">
                <div className='dropdown-shadow'>
                    <div
                      style={{ display: this.state.showItems ? "block" : "none" }}
                      className={"dropdown-items"}
                    >
                      {this.dropdown_options.map(item => (
                        <div class='dropdown-item'
                          key={item.key}
                          onClick={() => this.selectItem(item)}
                        >
                          <FontAwesomeIcon style={{color: item.circle_color}} icon={faCircle}/>
                          <p className='dropdown-text'>{item.value}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          <div class='board-row'>{tiles}</div>
        </div>
      );
    }
  }

export default Board
