import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workouts from './Workouts';
import Friends from './Friends';
import Login from './Login';
import Header from './Header';
import Profile from './Profile';
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
  
    const router = (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/workouts" render={(props) => <Workouts {...props} user={user} />} />
                    <Route path="/friends" render={(props) => <Friends {...props} user={user} />} />
                    <Route path="/profile" render={(props) => <Profile {...props} user={user} />} />
                </Switch>
            </div>
        </Router>
    );

    return (
        <div className="App">
            {router}
        </div>
  );
}

export default App;
