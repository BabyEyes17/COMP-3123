import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
import Hello from './components/Hello';
import Student from './components/Student';
import Employee from './components/Employee';

function App() {
  
  const [info] = useState({
    course: 'Fullstack Development - I',
    lab: 'React JS Programming Week09 Lab Exercise',
    id: '101484621',
    name: 'Jayden Lewis',
    college: 'George Brown College, Toronto'
  });

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
          
          <h1>Welcome To {info.course}</h1>
          <h2>{info.lab}</h2>
          <h3>{info.id}</h3>
          <h5>{info.name}</h5>
          <h6>{info.college}</h6>

        </header>
      </div>

    </Fragment>
  );
}

export default App;
