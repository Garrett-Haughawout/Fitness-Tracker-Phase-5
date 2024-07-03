import WorkoutBox from "./WorkoutBox";
import { useState, useEffect, useContext } from "react";


function Workouts({ user, ThemeContext }) {
    const [workouts, setWorkouts] = useState();
    const theme = useContext(ThemeContext);
    const classAddition = theme === 'dark' ? '-dark' : '';


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
            {workouts ? workouts.map((workout) => (
                <WorkoutBox key={workout.id} workout={workout} user={user} />
            ))
                : <p className="no-workouts-message">No workouts to display</p>
            }
        </div>
    );
}


export default Workouts;