import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [userData, setUserDataLoginResponse] = useState({});
  const [loginError, setLoginError] = useState("");

  // run on app startup
  useEffect(() => {
    getCSRFToken(); // get a CSRF Token
  }, []);

  useEffect(() => {
    if (userData.code == 200) {
      // proceed to the next component based on role
    } else {
      setPassword("");
      setLoginError(userData.error);
    }
  }, [userData]);

  function getCSRFToken() {
    // CSRF tokens mean the API can be ensured that
    // the app is the one making the request
    axios.get('/getCSRFToken')
    .then((response) => {
      // All axios requests will use the same CSRF token
      axios.defaults.headers.post['X-CSRF-Token'] = response.data.crsfToken;
    }, (err) => {
      console.log("Could not get a CSRF Token.");
    });
  }

  function login() {
    axios.post(`/api/login?username=${username}&password=${password}`)
    .then((response) => {
      if (response.data.code == 200) {
        setUserDataLoginResponse(response.data.data)
      } else {
        setUserDataLoginResponse(response.data);
      }
    }, (err) => {
      console.log("Could not login.")
    });
  }

  function handleUsernameChange(e) {
    setLoginError("");
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setLoginError("");
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
          <input type="text" placeholder="Username" onChange={handleUsernameChange} value={username}></input><br></br>
          <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password}></input><br></br>
          <p style={{color: "red", fontSize: "15px"}}>{loginError}</p>
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
