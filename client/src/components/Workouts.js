import WorkoutBox from "./WorkoutBox";
import { useState, useEffect } from "react";


function Workouts({ user }) {
    const [workouts, setWorkouts] = useState();

    useEffect(() => {
        fetch("http://localhost:5555/workouts")
            .then((res) => res.json())
            .then((data) => setWorkouts(data));
    }, []);

    if (!workouts) {
        return <p className="Loading-message">Loading...</p>;
    }

    return (
        <div>
            {workouts.map((workout) => (
                <WorkoutBox key={workout.id} workout={workout} user={user} />
            ))
            }
        </div>
    );
}


export default Workouts;