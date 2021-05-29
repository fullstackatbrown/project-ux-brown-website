import React from 'react';
import './App.css';
import './board.css'
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
    };
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
      const filter = <Filter board={this.state.total_board}/>

      return (
        <div class='board'>
          <div class='board-row'>
            {this.renderTile(this.state.total_board[0])}
            {this.renderTile(this.state.total_board[1])}
            {this.renderTile(this.state.total_board[2])}
          </div>
          <div class='board-row'>
            {this.renderTile(this.state.total_board[3])}
            {this.renderTile(this.state.total_board[4])}
            {this.renderTile(this.state.total_board[5])}
          </div>
        </div>
            // {this.renderTile(
            //   'Project Title',
            //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            //   'Ongoing',
            //   [
            //       {
            //         cssName: 'category-1',
            //         displayName: 'Project Tag'
            //       },
            //       {
            //         cssName: 'category-2',
            //         displayName: 'Project Tag'
            //       }
            //     ])}
            //
            // {this.renderTile(
            //   'Project Title',
            //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            //   'Ongoing',
            //   [
            //     {
            //       cssName: 'category-1',
            //       displayName: 'Project Tag'
            //     }
            //   ])}
          //
          //   {this.renderTile('Project Title',
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          //   'Ongoing',
          //   [
          //       {
          //         cssName: 'category-0',
          //         displayName: 'Project Tag'
          //       }
          //     ])}
          // </div>
          // <div class='board-row-2'>
          // {this.renderTile(
          //   'Project Title',
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          //   'Ongoing',
          //   [
          //       {
          //         cssName: 'category-1',
          //         displayName: 'Project Tag'
          //       },
          //       {
          //         cssName: 'category-2',
          //         displayName: 'Project Tag'
          //       }
          //     ])}
          //
          // {this.renderTile(
          //   'Project Title',
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          //   'Ongoing',
          //   [
          //     {
          //       cssName: 'category-1',
          //       displayName: 'Project Tag'
          //     }
          //   ])}
          //
          // {this.renderTile('Project Title',
          // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          // 'Ongoing',
          // [
          //     {
          //       cssName: 'category-0',
          //       displayName: 'Project Tag'
          //     }
          //   ])}
        //   </div>
        // </div>
      );
    }
  }


export default Board
