import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navegation from './components/Navgation'
import CreateUser from './components/CreateUser'
import UserList from './components/UsersList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Navegation />
      <div className="container p-4">
        <Route path="/" exact component={UserList} />
        <Route path="/create" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
