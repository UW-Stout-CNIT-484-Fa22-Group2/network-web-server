import './App.css';
import React, {useState} from 'react';


function App() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [userData, setUserDataLoginResponse] = useState({});

  function login() {
    fetch(`/api/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then((result) => {
      setUserDataLoginResponse(result);
    })
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

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
          <input type="text" placeholder="Username" onChange={handleUsernameChange}></input><br></br>
          <input type="password" placeholder="Password" onChange={handlePasswordChange}></input><br></br>
          <button className="Login-button" onClick={login}>
            Login
          </button>
        </p>
        <br></br>
        <p>
          {JSON.stringify(userData)}
        </p>
      </p>
    </div>
  );
}

export default App;
