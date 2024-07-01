import '../styles/GoalBox.css'


function GoalsBox({ goal }) {

    return (
        <div className='goals-container'>
            <h2>{goal.username}</h2>
            <p><strong>Goal:</strong> {goal.description}</p>
            <p><strong>Target Date:</strong> {goal.target_date}</p>
        </div>
    );
}

export default GoalsBox;