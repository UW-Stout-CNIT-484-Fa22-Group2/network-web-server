import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [userData, setUserDataLoginResponse] = useState({});

  // run on app startup
  useEffect(() => {
    getCSRFToken();
  }, [])

  function getCSRFToken() {
    axios.get('/getCSRFToken')
    .then((response) => {
      axios.defaults.headers.post['X-CSRF-Token'] = response.data.crsfToken;
    });
  }

  function login() {
    axios.post(`/api/login?username=${username}&password=${password}`)
    .then((response) => {
      setUserDataLoginResponse(response.data);
    });
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
