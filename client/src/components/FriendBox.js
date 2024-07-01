import WorkoutBox from './WorkoutBox.js';
import { useState } from 'react';

function FriendBox({ friendShip }) {
    const [showWorkouts, setShowWorkouts] = useState(false);
    
    return (
        <div>
            <h3 className='friend-name-header'>{friendShip.friend.username}</h3>
            <button className='show-workout-button' onClick={() => setShowWorkouts(!showWorkouts)}>
                {showWorkouts ? 'Hide Workouts' : 'Show Workouts'}
            </button>
            {showWorkouts ? (
                <div>
                    {friendShip.friend.workouts.map((workout) => (
                        <WorkoutBox key={workout.id} workout={workout} />
                    ))}
                </div>
            ) : null}

            
        </div>
    );
}

export default FriendBox;