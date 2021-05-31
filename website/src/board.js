import React from 'react';
import './App.css';
import './board.css'
import Tile from './tile.js'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_categories: ['category 1', 'category 2', 'category 3', 'category 4'],
      // selected_categories: [],
      total_board: [
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
      ],
      // TODO: find out how to set filtered_board equal to total_board so this doesn't have to be here twice
      filtered_board: [
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
    };
  }

  filterBoard(clicked) {
    this.setState({filtered_board: this.state.total_board.filter((tile) =>
      tile.categories.map((category) => category.cssName.includes(clicked)))})
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
      // board has categories variable which filter changes,
      // and then upon a change add a new state (filtered_board and selected category),
      // pass selected category to filter

      // TODO: make board row rendering dynamic, not dependent on length 6--map this.renderTile onto this.state.filtered_board, somehow make it group by 3s.. for loop?
      return (
        <div class='board'>
          <div class='filter-container'>
            <form>
              <label for="filter">Filter</label>
              <select name="filter" id="filter">
                <option value="category-1" onClick={() => this.filterBoard('category-1')}>project category</option>
                <option value="category-2" onClick={() => this.filterBoard('category-2')}>project category</option>
                <option value="category-3" onClick={() => this.filterBoard('category-3')}>project category</option>
                <option value="category-4" onClick={() => this.filterBoard('category-4')}>project category</option>
              </select>
            </form>
          </div>
          <div class='board-row'>
            {this.renderTile(this.state.filtered_board[0])}
            {this.renderTile(this.state.filtered_board[1])}
            {this.renderTile(this.state.filtered_board[2])}
          </div>
          <div class='board-row'>
            {this.renderTile(this.state.filtered_board[3])}
            {this.renderTile(this.state.filtered_board[4])}
            {this.renderTile(this.state.filtered_board[5])}
          </div>
        </div>
      );
    }
  }


export default Board
