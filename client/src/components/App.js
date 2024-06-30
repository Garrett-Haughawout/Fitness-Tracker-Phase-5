import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workouts from './Workouts';
import Friends from './Friends';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import '../styles/App.css';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5555/check_session')
            .then((r) => {
                if (r.ok) {
                r.json().then((user) => setUser(user));
                }
            });
    }, []);
  
    if (!user) return <Login onLogin={setUser} />;
  
    return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
