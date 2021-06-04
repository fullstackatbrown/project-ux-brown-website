import React from 'react';
import './App.css';
import './board.css'
import Tile from './tile.js'

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

    this.filtered_options = this.filterBoard();

    this.handleChange = this.handleChange.bind(this);
    this.filterBoard = this.filterBoard.bind(this);
  }

  filterBoard() {

    const filtered = [];

    for (let cat of this.total_categories) {
      filtered[cat] = this.filterBoardHelper(cat);
    }

    return filtered;
    }

  filterBoardHelper(cat) {

    var filtered = this.total_board;

    if (cat !== 'all-categories') {
      filtered = this.total_board.filter(tile =>
        (tile.categories.filter(category =>
          category.cssName.includes(cat))).length > 0)
    }
    return filtered;
  }

  handleChange(event) {
    var choice = event.target.value;
    this.setState({filtered_board: this.filtered_options[choice]})
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

      return (
        <div class='board'>
          <div class='filter-container'>
            <form>
              <label for="filter">Filter</label>
              <select name="filter" id="filter" onChange={this.handleChange}>
                <option value="all-categories">all projects</option>
                <option value="category-0">project category 0</option>
                <option value="category-1">project category 1</option>
                <option value="category-2">project category 2</option>
                <option value="category-3">project category 3</option>
              </select>
            </form>
          </div>

          <div class='board-row'>
            // this gives the right output
            {console.log(this.state.filtered_board)}
            // this renders the wrong output--why?? css problem?
            {this.state.filtered_board.map(tile => this.renderTile(tile))}
          </div>
          <div class='board-row'>
          </div>
        </div>
      );
    }
  }


export default Board
