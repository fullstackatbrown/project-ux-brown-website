import React from 'react';
import '../App.css';
import './event_tile.css'


class EventTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // see below for instructions
      title: this.props.title,
      description: this.props.description,
      date: this.props.date,
      date_words: this.props.date_words,
      status: this.props.status,
      add_link: this.props.add_link,
  };
}

  render() {

    return (
      <div class='tile-container'>
        <div class='grey-box'></div>
        <div class='white-box'>
          <p class='date_words'>{this.state.date_words}</p>
          <p class='title'>{this.state.title}</p>
          <p class='description'>{this.state.description}</p>
          <a class='button' target="_blank" href={this.state.add_link}><div class='words'>Add to calendar</div></a>


        </div>
      </div>
  );
  }

}

export default EventTile
