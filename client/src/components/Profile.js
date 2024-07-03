import Friends from './Friends';
import UserWorkouts from './userWorkouts';
import UserGoals from './userGoals';
import { useEffect, useState } from 'react';
import '../styles/Profile.css';


function Profile({ user }) {
    const [showFriends, setShowFriends] = useState(false);
    const [showWorkouts, setShowWorkouts] = useState(false);
    const [showGoals, setShowGoals] = useState(false);

    
    if (!Profile) {
        return <p className="Loading-message">Loading...</p>;
    }

    function handlePut(e) {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            username: e.target.username.value
        }

        fetch(`/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <h1>{user.username}</h1>
            </div>
            <div className='profile-body'>
                <h2>Profile Details</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
            </div>
            <div className='profile-friends-container'>
                <h2>Friends</h2>
                <button className='profile-show-button' onClick={() => setShowFriends(!showFriends)}>Show Friends</button>
                {showFriends ? <Friends user={user} /> : null}
            </div>
            <div className='profile-workouts-container'>
                <h2>Workouts</h2>
                <button className='profile-show-button' onClick={() => setShowWorkouts(!showWorkouts)}>Show Workouts</button>
                {showWorkouts ? <UserWorkouts user={user} /> : null}
            </div>
            <div className='profile-goals-container'>
                <h2>Goals</h2>
                <button className='profile-show-button' onClick={() => setShowGoals(!showGoals)}>Show Goals</button>
                {showGoals ? <UserGoals user={user} /> : null}
            </div>
            <div className='change-profile-info-container'>
                <h2>Change Profile Information</h2>
                <form onSubmit={handlePut}>
                    <label>Email:</label>
                    <input type='text' name='email' />
                    <label>Username:</label>
                    <input type='text' name='username' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;