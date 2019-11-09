import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navegation from './components/Navgation'
import CreateUser from './components/CreateUser'
import UserList from './components/UsersList'

function App() {
  return (
    <Router>
      <Navegation />

      <Route path="/" exact component={UserList} />
      <Route  path="/create" component={CreateUser} />
    </Router>
  );
}

export default App;
