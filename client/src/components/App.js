import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workouts from './Workouts';
import Friends from './Friends';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/friends" component={Friends} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
