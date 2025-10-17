import React, { Component, useState } from 'react';

export class EmployeeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "No Name"
    };
  }

  btnClick = (event) => {
    event.preventDefault();
    alert('Button Clicked');
  };

  onChangeName = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Employee Class Component</h1>
        <button onClick={this.btnClick}>Show Alert</button>
        <p>Name: {this.state.name}</p>
        <input
          type="text"
          name="txtName"
          placeholder="Enter Name"
          onChange={this.onChangeName}
        />
      </div>
    );
  }
}