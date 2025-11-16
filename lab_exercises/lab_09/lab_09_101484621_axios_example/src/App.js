import './App.css';
import { Routes, Route } from 'react-router-dom';
import PersonList from "./components/person/PersonList";
import PersonProfile from "./components/person/PersonProfile";

function App() {
  return (
    <div className="App">
      
      <h1>COMP 3123 - Lab 09</h1>
      <h5>Jayden Lewis - 101484621</h5>

      <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="/profile" element={<PersonProfile />} />
      </Routes>

    </div>
  );
}

export default App;
