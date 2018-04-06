import React, { Component } from 'react';

import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  clickEventHandler = this.handleClick.bind(this);

  render() {
    return (
      <div>
        <div className="Box" onClick={this.clickEventHandler} >
          {this.state.value}
        </div>
      </div>
    );
  }

  handleClick() {
    console.log(this.props.currentPlayer)
    this.setState({
      value: this.props.currentPlayer
    })
    this.props.changePlayer()
  }
}

export default Box;