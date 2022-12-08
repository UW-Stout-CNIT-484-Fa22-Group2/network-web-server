import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Doctor from './Doctor';
import Patient from './Patient';
import Nurse from './Nurse'
//import role from ''
import reportWebVitals from './reportWebVitals';

export function shown() {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/*<Doctor />*/}
    {/*<Nurse />*/}
    {/*<Patient />*/}
    <App />
    </React.StrictMode>
  
);
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
