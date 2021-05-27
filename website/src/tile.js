import React from 'react';
import './App.css';
import './tile.css'
import Filter from './filter.js'
import Board from './board.js'
import Header from './header.js';
import Footer from './footer.js';


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // see below for instructions
      title: this.props.title,
      description: this.props.description,
      status: this.props.status,
      categories: this.props.categories
  };
}

  render() {

    const listItems = this.state.categories.map((category) =>
    <li class={category.cssName}>{category.displayName}</li>);

    return (
      <div class='tile-container'>
        <div class='grey-box'></div>
        <div class='white-box'>
          <h3>{this.state.status}</h3>
          <h1>{this.state.title}</h1>
          <h2>{this.state.description}</h2>
          <ul>{listItems}</ul>
        </div>
      </div>
  );
  }

}

export default Tile

// examples of the fields in this.state -> must follow these data types!
//   title: 'Project Title',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
//   status: 'Ongoing',
//   categories: [
//     {
//       cssName: 'category-1',
//       displayName: 'Project Tag'
//     },
//     {
//       cssName: 'category-2',
//       displayName: 'Project Tag'
//     }
//   ]
// };
