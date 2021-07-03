import React from 'react';
import './App.css';
import './board.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

// option component: get circles and content to cohabitate. should it track whether it's clicked?
class Option extends React.Component {
  constructor(props) {
    super(props);
    this.circle = <FontAwesomeIcon className='circles' style={{color: this.props.color}} icon={faCircle}/>;
    this.content = this.props.content;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <button className='option'>{this.circle}{this.content}</button>
    );
  }
}

export default Option
