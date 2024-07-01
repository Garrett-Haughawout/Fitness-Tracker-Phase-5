import { useEffect, useState } from "react"
import WorkoutBox from "./WorkoutBox";


function UserWorkouts({ user }) {
    
    if (user.workouts.length === 0) {
        return <p className="Loading-message">No workouts to display</p>;
    }

    function renderWorkouts() {
        return user.workouts.map((workout) => {
            return (
                <WorkoutBox workout={workout} key={workout.id} />
            );
        });
    }

    return (
        <div>
            {renderWorkouts()}
        </div>
    )
}

export default UserWorkouts;