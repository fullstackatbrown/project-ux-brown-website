import React from 'react';
import './App.css';
import './board.css'

import Option from './option.js'

// dropdown component that groups the options, tracks which option is clicked
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
        <Option color='transparent' content='all categories'/>,
        <Option color='#ADDCD1' content='project category 0'/>,
        <Option color='#FFCC01' content='project category 1'/>,
        <Option color='#FF8260' content='project category 2'/>,
        <Option color='#2D56C2' content='project category 3'/>
    ];
    this.state = {
      chosen: this.options[0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({chosen: event.target.value})
  }

  render() {
    return(
      // this won't work; come back to this
      <div className='dropdown' onClick={this.handleClick} value={this.state.chosen}>
        <Option color='transparent' content='all categories'/>
        <Option color='#ADDCD1' content='project category 0'/>
        <Option color='#FFCC01' content='project category 1'/>
        <Option color='#FF8260' content='project category 2'/>
        <Option color='#2D56C2' content='project category 3'/>
      </div>

    );
  }
}

export default Dropdown
