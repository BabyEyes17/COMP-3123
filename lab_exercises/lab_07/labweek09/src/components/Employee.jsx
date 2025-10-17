import React, { Component, useState } from 'react';

export default function Employee() {
  const [name, setName] = useState('');

  function btnClick(event) {
    event.preventDefault();
    alert('Button Clicked');
  }

  function onChangeName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Employee Functional Component</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={onChangeName}
      />
      <button onClick={btnClick}>Click</button>
      <p>Name: {name}</p>
    </div>
  );
}