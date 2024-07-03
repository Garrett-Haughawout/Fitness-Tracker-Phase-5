import WorkoutBox from './WorkoutBox.js';
import { useState } from 'react';
import '../styles/FriendBox.css';

function FriendBox({ friendShip, user }) {
    const [showWorkouts, setShowWorkouts] = useState(false);

    return (
        <div className='friendbox-container'>
            <h3 className='friend-name-header'>{friendShip.friend.username}</h3>
            <button className='show-workout-button' onClick={() => setShowWorkouts(!showWorkouts)}>
                {showWorkouts ? 'Hide Workouts' : 'Show Workouts'}
            </button>
            {showWorkouts ? (
                <div>
                    {friendShip.friend.workouts.length > 0 ? friendShip.friend.workouts.map((workout) => (
                        <WorkoutBox key={workout.id} workout={workout} user={user} />
                    )) : <p className='no-workouts-message'>No workouts to display</p>}
                </div>
            ) : null}

            
        </div>
    );
}

export default FriendBox;