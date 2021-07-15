import React from 'react';
import Header from '../header-footer/header.js'
import Board from '../projects/projects_board.js'
import '../App.css'
import '../projects/projects.css'

class Projects extends React.Component {

  render () {
    const header = <Header />
    const board = <Board />

    return (
      <div class='canvas'>
        {header}
        <h1 class='projects-header'>Projects</h1>
        <p class='projects-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.</p>
        {board}
      </div>
    );
  }
}

export default Projects
