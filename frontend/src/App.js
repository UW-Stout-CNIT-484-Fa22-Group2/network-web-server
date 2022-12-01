import './App.css';

function App() {
  return (
    <div className="App">
      <p className="App-header">
          <header className="Text-header">
            404 Hospital
          </header>
      <p  className="Login-box"> 
          <p>
            Login Page
          </p>
          <input type="text" placeholder="Username"></input><br></br>
          <input type="password" placeholder="Password"></input><br></br>
          <button className="Login-button">
            Login
          </button>
        </p><br></br>
        </p>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [temp, setTemp] = useState();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((result) => {
        setTemp(result);
        console.log(result);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {temp}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
