import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import ProfileEdit from './components/ProfileEdit/ProfileEdit'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route component={ Auth } path='/' exact />
          <Route component={ Dashboard } path='/Dashboard' />
          <Route component={ ProfileEdit } path='/Profile' />
        </div>
      </HashRouter>
    );
  }
}

export default App;
