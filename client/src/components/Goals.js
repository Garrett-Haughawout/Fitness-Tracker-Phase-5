import { useEffect, useState } from 'react';
import GoalsBox from './GoalsBox';
import '../styles/Goals.css';

function Goals() {
    const [goals, setGoals] = useState();

    useEffect(() => {
        fetch('http://localhost:5555/goals')
            .then((res) => res.json())
            .then((data) => setGoals(data));
    }, []);

    return (
        <div className="goals-container">
            <h1 className="goals-header">Goals</h1>
            {goals ? goals.map((goal) => <GoalsBox key={goal.id} goal={goal} />) : <p className="Loading-message">Loading...</p>}
        </div>
    );
}

export default Goals;