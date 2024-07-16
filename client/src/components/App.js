import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workouts from './Workouts';
import Friends from './Friends';
import Login from './Login';
import Header from './Header';
import Profile from './Profile';
import Goals from './Goals';
import '../styles/App.css';
import View from './ViewUserProfile'

const ThemeContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://fitness-tracker-phase-5.onrender.com/check_session') 
            .then((r) => {
                if (r.ok) {
                r.json().then((user) => setUser(user));
                }
            });
    }, []);
  
    if (!user) return <Login onLogin={setUser} />;


    function handleLogout() {
        fetch('https://fitness-tracker-phase-5.onrender.com/logout', {
            method: 'DELETE'
        }).then(() => setUser(null));
    }
  
    const router = (
        <Router>
            <div>
                    <Header user={user} handleLogout={handleLogout} ThemeContext={ThemeContext}/>
                <Switch>
                    <Route path="/" exact render={(props) => <Home {...props} user={user} ThemeContext={ThemeContext} />}  />
                    <Route path="/workouts" render={(props) => <Workouts {...props} user={user} ThemeContext={ThemeContext} />} />
                    <Route path="/friends" render={(props) => <Friends {...props} user={user} ThemeContext={ThemeContext} />} />
                    <Route path="/profile" render={(props) => <Profile {...props} user={user} ThemeContext={ThemeContext} />} />
                    <Route path="/goals" render={(props) => <Goals {...props} user={user} ThemeContext={ThemeContext} />} />
                    <Route path={`/users/${user.id}`} render={(props) => <View {...props} user={user} ThemeContext={ThemeContext} />} />
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
