import "../styles/WorkoutBox.css";


function WorkoutBox({ workout }) {

    return (
        <div className="workout-box-container">
            <div className="workout-box-section">
                <h2>{workout.username}</h2>
                <p>Calories Burned: {workout.calories_burned}</p>
                <p>Duration: {workout.duration}</p>
            </div>
            <div className="workout-box-section">
                <p>Workout: {workout.type}</p>
                <p>Description: {workout.description}</p>
            </div>
        </div>
    );
}

export default WorkoutBox;