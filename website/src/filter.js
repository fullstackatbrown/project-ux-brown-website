import React from 'react';
import './App.css';
import Tile from './tile.js'
import Board from './board.js'
import Header from './header.js';
import Footer from './footer.js';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['category-1', 'category-2', 'category-3', 'category-4'],
      filtered_board: this.props.board
    };
  }

  filterBoard = (event) => {
    this.setState({filtered_board: this.total_board.filter((tile) =>
      tile.categories.map((category) => category.cssName.includes(event.target.value)))})
  }

  render() {
    return (
      <form>
      <h1>Filter</h1>
        <input class='filter-button' type='radio' id='category-1'
        value='category-1' onChange={this.filterBoard}/>
        <label for='category 1'>project category</label>
        <input class='filter-button' type='radio' id='category-2'
        value='category-2' onChange={this.filterBoard}/>
        <label for='category 2'>project category</label>
        <input class='filter-button' type='radio' id='category-3'
        value='category-3' onChange={this.filterBoard}/>
        <label for='category 3'>project category</label>
        <input class='filter-button' type='radio' id='category-4'
        value='category-4' onChange={this.filterBoard}/>
        <label for='category 4'>project category</label>
      </form>

    );
  }
}

export default Filter
