import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path = "/" component = {Home} exact />
          <Route path = "/register" component = {Register} />
          <Route path = "/login" component = {Login} />

      </Router>
    </div>
  );

}

export default App;
