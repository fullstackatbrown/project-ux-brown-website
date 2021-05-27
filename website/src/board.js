import React from 'react';
import './App.css';
import Tile from './tile.js'
import Filter from './filter.js'
import Header from './header.js';
import Footer from './footer.js';

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


// TODO: render board
  // render() {
  //     const filter = <Filter board={this.state.total_board}/>
  //
  //     return (
  //       // this doesn't work, renders as undefined
  //     filter.state.filtered_board.map(tile => (
  //
  //     )))}
  }


  // export default Board
