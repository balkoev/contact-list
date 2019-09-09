import React, { Component } from 'react'

export default class ContactItem extends Component {
  render() {
    return (
          <tr>
            <td>{this.props.firstname}</td>
            <td>{this.props.lastname}</td>
          </tr>
    );
  }
}
