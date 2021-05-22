import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      status: this.props.status,
      categories: this.props.categories,
    };
  }

}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['category 1', 'category 2', 'category 3', 'category 4'],
      filtered_board: [],
      total_board: this.props.board
    };
  }

  filterBoard = (event) => {
    this.setState({filtered_board: this.total_board.filter(tile =>
      tile.state.categories.includes(event.target.value))})
  }

  render() {
    return (
      <form>
      <h1>Filter</h1>
        <input class='filter-button' type='radio' id='category 1'
        value='category 1' onChange={this.filterBoard}/>
        <label for='category 1'>Category 1</label>
        <input class='filter-button' type='radio' id='category 2'
        value='category 2' onChange={this.filterBoard}/>
        <label for='category 2'>Category 2</label>
        <input class='filter-button' type='radio' id='category 3'
        value='category 3' onChange={this.filterBoard}/>
        <label for='category 3'>Category 3</label>
        <input class='filter-button' type='radio' id='category 4'
        value='category 4' onChange={this.filterBoard}/>
        <label for='category 4'>Category 4</label>
      </form>

    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['category 1', 'category 2', 'category 3', 'category 4'],
      total_board: [
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 1', 'category 2', 'category 3']}/>,
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 2']}/>,
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 1']}/>,
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 2', 'category 3', 'category 4']}/>,
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 2']}/>,
        <Tile title='Project Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        status='Ongoing' categories={['category 1']}/>]
    };
  }

  render() {
      const filter = <Filter board={this.state.total_board}/>

      return (
        // this doesn't work, renders as undefined
      filter.state.filtered_board.map(tile => (
        <div class='tile-container'>
          <h1>{tile.title}</h1>
          <h2>{tile.description}</h2>
          // todo: add categories, somehow make them all separate html elements
          <h3>{tile.status}</h3>
        </div>
      )))}
  }

export default Board
