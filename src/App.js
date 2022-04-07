import logo from './logo.svg';
import './App.css';
import Nabvar from './components/Nabvar';
import ReactDOM from "react-dom/client";
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";




function App() {
  setInterval(() => {
    document.title = "install now";
  }, 3000);
  setInterval(() => {
    document.title = "text";
  }, 2000);
  const [alert, setAlert] = useState({
    message: null,
    type: null
  });
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert({
        message: null,
        type: null
      });
    }, 1500);
  }
  return (
    <>
      {/* <Nabvar title="preet" title1="jinu"/> */}
      {/* <Router>
        <Switch> */}
          <Nabvar />
          <Alert alert={alert} type="success" />
          {/* <Route exact path="/about"> */}
        
          {/* </Route> */}
          {/* // <Route exact path="/"> */}
            <TextForm showAlert={showAlert} />
            <About />
          {/* </Route> */}
      {/* //   </Switch> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
