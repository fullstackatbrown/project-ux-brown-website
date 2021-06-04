import React from 'react';
import './App.css';
import './tile.css'


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
          <p class='status'>{this.state.status}</p>
          <p class='title'>{this.state.title}</p>
          <p class='description'>{this.state.description}</p>
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
