import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Hello from './components/Hello';
import Student from './components/Student';
import Employee from './components/Employee';

function App() {
  let name = "Professor Jayden Lewis";
  let myStyle = { color: 'blue', backgroundColor: 'yellow' };

  return (
    <Fragment>
      {/* 
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hello ReactJS</h1>
      <h2 style={myStyle}>{name}</h2>
      <Hello />
      <Student sid={1} fnm="Jayden" lnm="Lewis" city="Toronto" />
      <Employee />
      */}

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1>Welcome To Fullstack Development - I </h1>
          <h2>React JS Programming Week09 Lab Exercise</h2>
          <h3>101484621</h3>
          <h5>Jayden Lewis</h5>
          <h6>George Brown College, Toronto</h6>

        </header>
      </div>
    </Fragment>
  );
}

export default App;
