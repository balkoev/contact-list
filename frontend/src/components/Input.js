import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        Firstname:<br/>
        <input onChange={this.props.addInputFirstname} value={this.props.first_name}></input>
        <br/>
        Lastname:<br/>
        <input onChange={this.props.addInputLastname} value={this.props.last_name}></input>
      </div>
    )
  }
}

export default Input;